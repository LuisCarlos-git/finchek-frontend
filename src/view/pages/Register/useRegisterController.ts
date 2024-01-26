import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-hot-toast';

import {
  registerSchema,
  type RegisterFormValues
} from '@/app/formSchemas/register';
import { useSignUp } from '@/app/hooks/queries/useSignUp';
import { useAuth } from '@/app/hooks/context/useAuth';

export const useRegisterController = () => {
  const { signIn } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit: hookformSubmit
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema)
  });

  const { mutateAsync, isLoading } = useSignUp();

  const handleSubmit = hookformSubmit(
    async (formValues: RegisterFormValues) => {
      try {
        const { accessToken } = await mutateAsync(formValues);
        signIn(accessToken);
      } catch (err) {
        toast.error('Ocorreu um erro ao criar sua conta!');
      }
    }
  );

  return {
    handleSubmit,
    register,
    errors,
    isLoading
  };
};

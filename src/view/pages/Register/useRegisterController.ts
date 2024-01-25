import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-hot-toast';

import {
  registerSchema,
  type RegisterFormValues
} from '@/app/formSchemas/register';
import { useSignUpMutation } from '@/app/hooks/queries/useSignUpMutation';
import { useAuth } from '@/app/hooks/context/useAuth';

export const useRegisterController = () => {
  const { signIn } = useAuth();

  const methods = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema)
  });

  const { mutateAsync, isLoading } = useSignUpMutation();

  const handleSubmit = methods.handleSubmit(
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
    methods,
    isLoading
  };
};

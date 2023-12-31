import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { loginSchema, type LoginFormValues } from '@/app/formSchemas/login';

import { useAuth } from '@/app/hooks/context/useAuth';
import { useSignInMutation } from '@/app/hooks/queries/useSignInMutation';

export const useLoginController = () => {
  const { signIn } = useAuth();

  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors }
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema)
  });

  const { mutateAsync, isLoading } = useSignInMutation();

  const handleSubmit = hookFormHandleSubmit(
    async (formValues: LoginFormValues) => {
      try {
        const { accessToken } = await mutateAsync(formValues);
        signIn(accessToken);
      } catch (err) {
        toast.error('Credenciais invalidas');
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

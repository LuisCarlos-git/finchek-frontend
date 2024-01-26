import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { loginSchema, type LoginFormValues } from '@/app/formSchemas/login';

import { useAuth } from '@/app/hooks/context/useAuth';
import { useSignIn } from '@/app/hooks/queries/useSignIn';

export const useLoginController = () => {
  const { signIn } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit: hookFormSubmit
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema)
  });

  const { mutateAsync, isLoading } = useSignIn();

  const handleSubmit = hookFormSubmit(async (formValues: LoginFormValues) => {
    try {
      const { accessToken } = await mutateAsync(formValues);
      signIn(accessToken);
    } catch (err) {
      toast.error('Credenciais invalidas');
    }
  });

  return {
    handleSubmit,
    errors,
    register,
    isLoading
  };
};

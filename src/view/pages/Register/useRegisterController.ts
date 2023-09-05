import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { authServices } from '@/app/services/authService';

import {
  registerSchema,
  type RegisterFormValues
} from '@/app/formSchemas/register';
import { type ISignUpParams } from '@/app/interfaces/services/AuthService';
import { MutationKeys } from '@/app/constants/queryKeys';

export const useRegisterController = () => {
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors }
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema)
  });

  const { mutateAsync, isLoading } = useMutation({
    mutationKey: MutationKeys.SIGNUP,
    mutationFn: async (data: ISignUpParams) => await authServices.signUp(data)
  });

  const handleSubmit = hookFormHandleSubmit(
    async (formValues: RegisterFormValues) => {
      try {
        const { accessToken } = await mutateAsync(formValues);
        console.log({ accessToken });
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

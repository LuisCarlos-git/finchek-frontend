import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { loginSchema, type LoginFormValues } from '@/app/formSchemas/login';

export const useLoginController = () => {
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors }
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema)
  });

  const handleSubmit = hookFormHandleSubmit((formValues: LoginFormValues) => {
    console.log(formValues);
  });

  return {
    handleSubmit,
    register,
    errors
  };
};

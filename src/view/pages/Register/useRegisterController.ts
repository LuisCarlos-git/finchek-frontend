import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  registerSchema,
  type RegisterFormValues
} from '@/app/formSchemas/register';

export const useRegisterController = () => {
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors }
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema)
  });

  const handleSubmit = hookFormHandleSubmit(
    (formValues: RegisterFormValues) => {
      console.log(formValues);
    }
  );

  return {
    handleSubmit,
    register,
    errors
  };
};

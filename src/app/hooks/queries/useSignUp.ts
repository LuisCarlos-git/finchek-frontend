import { useMutation } from '@tanstack/react-query';

import { authServices } from '@/app/services/http/authService';

import { MutationKeys } from '@/app/constants/queryKeys';
import { type ISignUpParams } from '@/app/interfaces/services/AuthService';

export const useSignUp = () => {
  return useMutation({
    mutationKey: MutationKeys.SIGNUP,
    mutationFn: async (data: ISignUpParams) => await authServices.signUp(data)
  });
};

import { useMutation } from '@tanstack/react-query';

import { authServices } from '@/app/services/http/authService';

import { MutationKeys } from '@/app/constants/queryKeys';
import { type ISignInParams } from '@/app/interfaces/services/AuthService';

export const useSignIn = () => {
  return useMutation({
    mutationKey: MutationKeys.SINGIN,
    mutationFn: async (data: ISignInParams) => await authServices.signIn(data)
  });
};

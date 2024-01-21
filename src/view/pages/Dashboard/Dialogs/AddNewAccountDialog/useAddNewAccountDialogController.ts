import { useDashboard } from '@/app/hooks/context/useDashboard';

export function useAddNewAccountDialogController() {
  const { newAccountDialogOpen, handleToggleNewAccountDialog } = useDashboard();

  return {
    newAccountDialogOpen,
    handleToggleNewAccountDialog
  };
}

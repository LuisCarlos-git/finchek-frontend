import { TrashIcon } from '@/assets/icons/TrashIcon';
import { Dialog } from './Dialog';
import { Button } from './Button';
import { ConditionalRender } from './ConditionalRender';

interface IConfirmDeleteDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  description?: string;
  title: string;
  isConfirmLoading?: boolean;
}

export function ConfirmDeleteDialog({
  onClose,
  open,
  onConfirm,
  description,
  title,
  isConfirmLoading = false
}: IConfirmDeleteDialogProps) {
  return (
    <Dialog title="Excluir" open={open} onClose={onClose}>
      <div className="flex space-y-6 justify-center items-center flex-col">
        <div className="bg-red-50 w-6 h-6 rounded-full">
          <TrashIcon className="w-6 h-6 text-red-900" />
        </div>
        <h3 className="font-bold max-w-[179px]  text-center">{title}</h3>
        <ConditionalRender condition={!description} fallback={null}>
          <p className="text-center">{description}</p>
        </ConditionalRender>
      </div>

      <div className="space-y-4 mt-10">
        <Button
          isLoading={isConfirmLoading}
          onClick={onConfirm}
          className="w-full"
          variant="danger"
        >
          Sim, desejo excluir
        </Button>
        <Button
          variant="outline"
          onClick={onClose}
          className="w-full"
          disabled={isConfirmLoading}
        >
          Cancelar
        </Button>
      </div>
    </Dialog>
  );
}

import { Dialog } from '@/view/components/Dialog';
import { useEditAccountDialog } from './useEditAccountDialogController';
import { TextFieldCurrency } from '@/view/components/TextFieldCurrency';
import { TextField } from '@/view/components/TextField';
import { Select } from '@/view/components/Select';
import { BankAcountsType } from '@/app/enums/BankAccountsType';
import { ColorDropdownField } from '@/view/components/ColorDropdown';
import { Button } from '@/view/components/Button';
import { Controller } from 'react-hook-form';
import { TrashIcon } from '@/assets/icons/TrashIcon';
import { ConfirmDeleteDialog } from '@/view/components/ConfirmDeleteDialog';

const options = [
  { value: BankAcountsType.INVESTMENT, label: 'Investimento' },
  { value: BankAcountsType.CHECKING, label: 'Conta Corrente' },
  { value: BankAcountsType.CASH, label: 'Dinheiro físico' }
];

export function EditAccountDialog() {
  const {
    editAccountDialogOpen,
    handleToggleEditAccountDialog,
    errors,
    register,
    control,
    handleSubmit,
    isEditBankAccountLoading,
    deleteDialogOpen,
    handleToggleDeleteDialog,
    handleDeleteBankAccount,
    isDeleteBankAccountLoading
  } = useEditAccountDialog();
  return (
    <>
      <Dialog
        title="Editar Conta"
        open={editAccountDialogOpen && !deleteDialogOpen}
        onClose={() => {
          handleToggleEditAccountDialog(null);
        }}
        rightAction={
          <button
            onClick={handleToggleDeleteDialog}
            className="hover:bg-red-50 rounded-full p-2"
          >
            <TrashIcon className="w-6 h-6 text-red-900" />
          </button>
        }
      >
        <form onSubmit={handleSubmit}>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg text-gray-600 tracking-[0.5px]">R$</span>
              <Controller
                name="initialBalance"
                control={control}
                defaultValue="0"
                render={({ field, fieldState }) => (
                  <TextFieldCurrency
                    error={fieldState.error?.message}
                    onChange={field.onChange}
                    value={field.value}
                  />
                )}
              />
            </div>
            <span className="text-xs text-gray-600 tracking-[0.5px]">
              Saldo
            </span>
          </div>
          <div className="mt-10 space-y-2">
            <TextField
              type="text"
              placeholder="Nome da conta"
              error={errors.name?.message}
              {...register('name')}
            />
            <Controller
              control={control}
              name="type"
              render={({ field, fieldState }) => (
                <Select
                  error={fieldState.error?.message}
                  placeholder="Tipo de conta"
                  options={options}
                  onChange={field.onChange}
                  value={field.value}
                />
              )}
            />

            <Controller
              control={control}
              name="color"
              render={({ field, fieldState }) => (
                <ColorDropdownField
                  error={fieldState.error?.message}
                  onChange={field.onChange}
                  value={field.value}
                />
              )}
            />
          </div>

          <Button
            isLoading={isEditBankAccountLoading}
            className="w-full mt-8"
            type="submit"
          >
            Editar
          </Button>
        </form>
      </Dialog>
      <ConfirmDeleteDialog
        open={deleteDialogOpen}
        onClose={handleToggleDeleteDialog}
        isConfirmLoading={isDeleteBankAccountLoading}
        onConfirm={handleDeleteBankAccount}
        title="Tem certeza que deseja excluir esta conta?"
        description="Ao excluir a conta, também serão excluídos todos os registros de receita e despesas relacionados."
      />
    </>
  );
}

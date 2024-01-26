import { Dialog } from '@/view/components/Dialog';
import { useEditAccountDialog } from './useEditAccountDialogController';
import { TextFieldCurrency } from '@/view/components/TextFieldCurrency';
import { TextField } from '@/view/components/TextField';
import { Select } from '@/view/components/Select';
import { BankAcountsType } from '@/app/enums/BankAccountsType';
import { ColorDropdownField } from '@/view/components/ColorDropdown';
import { Button } from '@/view/components/Button';
import { Controller } from 'react-hook-form';

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
    isLoading
  } = useEditAccountDialog();
  return (
    <Dialog
      title="Editar Conta"
      open={editAccountDialogOpen}
      onClose={() => {
        handleToggleEditAccountDialog(null);
      }}
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
          <span className="text-xs text-gray-600 tracking-[0.5px]">Saldo</span>
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

        <Button isLoading={isLoading} className="w-full mt-8" type="submit">
          Editar
        </Button>
      </form>
    </Dialog>
  );
}

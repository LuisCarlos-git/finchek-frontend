import { Button } from '@/view/components/Button';
import { Dialog } from '@/view/components/Dialog';
import { Select } from '@/view/components/Select';
import { TextField } from '@/view/components/TextField';
import { TextFieldCurrency } from '@/view/components/TextFieldCurrency';
import { useNewTransactionDialogController } from './useNewTransactionDialogController';
import { DatePickerField } from '@/view/components/DatePickerField';
import { Controller } from 'react-hook-form';

export function NewTransactionDialog() {
  const {
    handleToggleNewTransactionDialog,
    newTransactionDialogOpen,
    isExpense,
    handleSubmit,
    register,
    control,
    categories,
    bankAccounts,
    errors
  } = useNewTransactionDialogController();

  return (
    <Dialog
      title={isExpense ? 'Nova Despesa' : 'Nova Receita'}
      open={newTransactionDialogOpen}
      onClose={() => {
        handleToggleNewTransactionDialog(null);
      }}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-lg text-gray-600 tracking-[0.5px]">R$</span>
            <Controller
              name="value"
              defaultValue="0"
              control={control}
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
            Valor {isExpense ? 'da despesa' : 'da receita'}
          </span>
        </div>
        <div className="mt-10 space-y-2">
          <TextField
            type="text"
            placeholder={`Nome ${isExpense ? 'da despesa' : 'da receita'}`}
            error={errors.name?.message}
            {...register('name')}
          />
          <Controller
            control={control}
            name="categoryId"
            render={({ field, fieldState }) => (
              <Select
                error={fieldState.error?.message}
                onChange={field.onChange}
                value={field.value}
                placeholder="Categoria"
                options={categories}
              />
            )}
          />

          <Controller
            control={control}
            name="bankAccountId"
            render={({ field, fieldState }) => (
              <Select
                error={fieldState.error?.message}
                onChange={field.onChange}
                value={field.value}
                placeholder={isExpense ? 'Pagar com' : 'Receber com'}
                options={bankAccounts}
              />
            )}
          />
          <Controller
            control={control}
            name="date"
            defaultValue={new Date()}
            render={({ field, fieldState }) => (
              <DatePickerField
                error={fieldState.error?.message}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </div>

        <Button className="w-full mt-8" type="submit">
          Criar
        </Button>
      </form>
    </Dialog>
  );
}

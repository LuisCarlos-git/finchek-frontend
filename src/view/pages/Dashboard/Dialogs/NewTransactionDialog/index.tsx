import { Button } from '@/view/components/Button';
import { Dialog } from '@/view/components/Dialog';
import { Select } from '@/view/components/Select';
import { TextField } from '@/view/components/TextField';
import { TextFieldCurrency } from '@/view/components/TextFieldCurrency';
import { useNewTransactionDialogController } from './useNewTransactionDialogController';
import { BankAcountsType } from '@/app/enums/BankAccountsType';
import { DatePickerField } from '@/view/components/DatePickerField';

export function NewTransactionDialog() {
  const {
    handleToggleNewTransactionDialog,
    newTransactionDialogOpen,
    isExpense
  } = useNewTransactionDialogController();

  return (
    <Dialog
      title={isExpense ? 'Nova Despesa' : 'Nova Receita'}
      open={newTransactionDialogOpen}
      onClose={() => {
        handleToggleNewTransactionDialog(null);
      }}
    >
      <form>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-lg text-gray-600 tracking-[0.5px]">R$</span>
            <TextFieldCurrency />
          </div>
          <span className="text-xs text-gray-600 tracking-[0.5px]">
            Valor {isExpense ? 'da despesa' : 'da receita'}
          </span>
        </div>
        <div className="mt-10 space-y-2">
          <TextField
            type="text"
            name="name"
            placeholder={`Nome ${isExpense ? 'da despesa' : 'da receita'}`}
          />
          <Select
            placeholder="Categoria"
            options={[
              { value: BankAcountsType.INVESTMENT, label: 'Investimento' },
              { value: BankAcountsType.CHECKING, label: 'Conta Corrente' },
              { value: BankAcountsType.CASH, label: 'Dinheiro físico' }
            ]}
          />
          <Select
            placeholder={isExpense ? 'Pager com' : 'Receber com'}
            options={[
              { value: BankAcountsType.INVESTMENT, label: 'Investimento' },
              { value: BankAcountsType.CHECKING, label: 'Conta Corrente' },
              { value: BankAcountsType.CASH, label: 'Dinheiro físico' }
            ]}
          />
          <DatePickerField />
        </div>

        <Button className="w-full mt-8" type="submit">
          Criar
        </Button>
      </form>
    </Dialog>
  );
}

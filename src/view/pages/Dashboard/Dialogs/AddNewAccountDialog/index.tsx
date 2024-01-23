import { Dialog } from '@/view/components/Dialog';
import { useAddNewAccountDialogController } from './useAddNewAccountDialogController';
import { TextFieldCurrecy } from '@/view/components/TextFieldCurrency';
import { TextField } from '@/view/components/TextField';
import { Select } from '@/view/components/Select';
import { BankAcountsType } from '@/app/enums/BankAccountsType';
import { ColorDropdownField } from '@/view/components/ColorDropdown';
import { Button } from '@/view/components/Button';

export function AddNewAccountDialog() {
  const { handleToggleNewAccountDialog, newAccountDialogOpen } =
    useAddNewAccountDialogController();
  return (
    <Dialog
      title="Nova Conta"
      open={newAccountDialogOpen}
      onClose={handleToggleNewAccountDialog}
    >
      <form>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-lg text-gray-600 tracking-[0.5px]">R$</span>
            <TextFieldCurrecy />
          </div>
          <span className="text-xs text-gray-600 tracking-[0.5px]">Saldo</span>
        </div>
        <div className="mt-10 space-y-2">
          <TextField type="text" name="name" placeholder="Nome da conta" />
          <Select
            placeholder="Tipo de conta"
            options={[
              { value: BankAcountsType.INVESTMENT, label: 'Investimento' },
              { value: BankAcountsType.CHECKING, label: 'Conta Corrente' },
              { value: BankAcountsType.CASH, label: 'Dinheiro físico' }
            ]}
          />
          <ColorDropdownField />
        </div>

        <Button className="w-full mt-8" type="submit">
          Criar
        </Button>
      </form>
    </Dialog>
  );
}

import { useDashboard } from '@/app/hooks/context/useDashboard';
import { BankAccountIcon } from '@/assets/icons/BankAccountIcon';
import { Expense } from '@/assets/icons/categories/expense/Expense';
import { Income } from '@/assets/icons/categories/income/Income';
import { Dropdown } from '@/view/components/Dropdown';
import { PlusIcon } from '@radix-ui/react-icons';

export function Fab() {
  const { handleToggleNewAccountDialog, handleToggleNewTransactionDialog } =
    useDashboard();
  return (
    <Dropdown.Root>
      <Dropdown.Trigger className="fixed bottom-4 right-4 w-12 h-12 bg-teal-900 rounded-full flex items-center justify-center text-white">
        <PlusIcon className="w-6 h-6" />
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item
          className="gap-2"
          onSelect={() => {
            handleToggleNewTransactionDialog('EXPENSE');
          }}
        >
          <Expense />
          Nova Despesa
        </Dropdown.Item>
        <Dropdown.Item
          className="gap-2"
          onSelect={() => {
            handleToggleNewTransactionDialog('INCOME');
          }}
        >
          <Income />
          Nova Receita
        </Dropdown.Item>
        <Dropdown.Item
          onSelect={handleToggleNewAccountDialog}
          className="gap-2"
        >
          <BankAccountIcon />
          Nova Conta
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Root>
  );
}

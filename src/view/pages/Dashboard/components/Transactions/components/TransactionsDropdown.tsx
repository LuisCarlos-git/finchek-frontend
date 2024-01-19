import { ExpensesIcon } from '@/assets/icons/ExpensesIcon';
import { IncomeIcon } from '@/assets/icons/IncomeIcon';
import { TransactionsIcon } from '@/assets/icons/TransactionsIcon';
import { Dropdown } from '@/view/components/Dropdown';
import { ChevronDownIcon } from '@radix-ui/react-icons';

export function TransactionsTypeDropdown() {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger className="flex items-center gap-2">
        <TransactionsIcon />
        <span className="text-sm text-gray-800 tracking-[-0.5px] font-medium">
          Transações
        </span>
        <ChevronDownIcon className="text-gray-900" />
      </Dropdown.Trigger>
      <Dropdown.Content className="w-[279px]">
        <Dropdown.Item className="gap-2">
          <IncomeIcon />
          Receitas
        </Dropdown.Item>
        <Dropdown.Item className="gap-2">
          <ExpensesIcon />
          Despesas
        </Dropdown.Item>
        <Dropdown.Item className="gap-2">
          <TransactionsIcon />
          Transações
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Root>
  );
}

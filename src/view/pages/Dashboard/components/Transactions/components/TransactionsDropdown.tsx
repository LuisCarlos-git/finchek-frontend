import { TransactionType } from '@/app/enums/TransactionType';
import { ExpensesIcon } from '@/assets/icons/ExpensesIcon';
import { IncomeIcon } from '@/assets/icons/IncomeIcon';
import { TransactionsIcon } from '@/assets/icons/TransactionsIcon';
import { Dropdown } from '@/view/components/Dropdown';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { useMemo } from 'react';

interface TransactionsTypeDropdownProps {
  onSelect: (type: TransactionType | undefined) => void;
  activeFilter?: TransactionType | undefined;
}

export function TransactionsTypeDropdown({
  onSelect,
  activeFilter
}: TransactionsTypeDropdownProps) {
  const filterLabel = useMemo(() => {
    switch (activeFilter) {
      case TransactionType.INCOME: {
        return 'Receitas';
      }
      case TransactionType.EXPENSE: {
        return 'Despesas';
      }
      default: {
        return 'Transações';
      }
    }
  }, [activeFilter]);

  return (
    <Dropdown.Root>
      <Dropdown.Trigger className="flex items-center gap-2">
        <TransactionsIcon />
        <span className="text-sm text-gray-800 tracking-[-0.5px] font-medium">
          {filterLabel}
        </span>
        <ChevronDownIcon className="text-gray-900" />
      </Dropdown.Trigger>
      <Dropdown.Content className="w-[279px]">
        <Dropdown.Item
          className="gap-2"
          onSelect={() => {
            onSelect(TransactionType.INCOME);
          }}
        >
          <IncomeIcon />
          Receitas
        </Dropdown.Item>
        <Dropdown.Item
          className="gap-2"
          onSelect={() => {
            onSelect(TransactionType.EXPENSE);
          }}
        >
          <ExpensesIcon />
          Despesas
        </Dropdown.Item>
        <Dropdown.Item
          className="gap-2"
          onSelect={() => {
            onSelect(undefined);
          }}
        >
          <TransactionsIcon />
          Transações
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Root>
  );
}

import { Button } from '@/view/components/Button';
import { Dialog } from '@/view/components/Dialog';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useFiltersDialogController } from './useFiltersDialogController';
import { cn } from '@/app/utils/cn';

interface IFiltersDialogProps {
  open: boolean;
  onClose: () => void;
  onFilter: (filters: {
    bankAccountId: string | undefined;
    year: number;
  }) => void;
}

export function FiltersDialog({
  onClose,
  open,
  onFilter
}: IFiltersDialogProps) {
  const {
    handleSelectbankAccount,
    selectedBankAccountId,
    handleChangeYear,
    selectedYear,
    accounts
  } = useFiltersDialogController();

  return (
    <Dialog open={open} onClose={onClose} title="Filtros">
      <div>
        <span className="text-lg tracking-[-1px] text-gray-800 font-bold">
          Conta
        </span>
        <div className="space-y-2 mt-2">
          {accounts.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                handleSelectbankAccount(item.id);
              }}
              className={cn(
                'p-2 rounded-2xl w-full text-left text-gray-800 hover:bg-gray-50',
                selectedBankAccountId === item.id && '!bg-gray-200'
              )}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-10 w-52 text-gray-800">
        <span className="text-lg tracking-[-1px] font-bold block">Ano</span>
        <div className="flex items-center justify-between">
          <button
            className="w-12 h-12 flex justify-center items-center"
            onClick={() => {
              handleChangeYear(-1);
            }}
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <div className="text-center flex-1">
            <span className="text-sm font-medium tranking-[-0.5px]">
              {selectedYear}
            </span>
          </div>
          <button
            onClick={() => {
              handleChangeYear(1);
            }}
            className="w-12 h-12 flex justify-center items-center"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      <Button
        onClick={() => {
          onFilter({
            bankAccountId: selectedBankAccountId ?? undefined,
            year: selectedYear
          });

          onClose();
        }}
        className="w-full mt-10"
      >
        Aplicar Filtros
      </Button>
    </Dialog>
  );
}

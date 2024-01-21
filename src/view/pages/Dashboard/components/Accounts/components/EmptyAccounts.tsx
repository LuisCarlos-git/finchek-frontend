import { PlusIcon } from '@radix-ui/react-icons';

interface IEmptyAccountsProps {
  onAddNewAccount: () => void;
}

export function EmptyAccounts({ onAddNewAccount }: IEmptyAccountsProps) {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <strong className="text-white tracking-[-1px] text-lg">
          Minhas contas
        </strong>
      </div>

      <button
        onClick={onAddNewAccount}
        className="text-white gap-4 mt-4 h-52 flex items-center flex-col justify-center border-teal-600 border-2 rounded-2xl border-dashed"
      >
        <div className="w-11 h-11 rounded-full border-2 border-dashed border-white flex justify-center items-center">
          <PlusIcon className="w-6 h-6" />
        </div>
        <span className="font-medium tracking-[-0.5px] block w-32">
          Cadastre uma nova conta!
        </span>
      </button>
    </>
  );
}

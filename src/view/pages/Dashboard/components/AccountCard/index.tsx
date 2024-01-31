import { type BankAcountsType } from '@/app/enums/BankAccountsType';
import { useDashboard } from '@/app/hooks/context/useDashboard';
import { cn } from '@/app/utils/cn';
import { formatCurrencyToBRL } from '@/app/utils/formatCurrencyToBRL';
import { BankAccountTypeIcon } from '@/assets/icons/BankAccountTypeIcon';

interface AccountCardProps {
  name: string;
  color: string;
  balance: number;
  type: BankAcountsType;
}

export const AccountCart = ({
  balance,
  color,
  name,
  type
}: AccountCardProps) => {
  const { areValuesVisible } = useDashboard();
  return (
    <div
      className="p-4 bg-white rounded-2xl h-[200px] flex justify-between flex-col border-b-4 border-teal-950"
      style={{
        borderColor: color
      }}
    >
      <div>
        <BankAccountTypeIcon type={type} />
        <span className="text-gray-800 font-medium tracking-[-0.5px] block mt-4">
          {name}
        </span>
      </div>
      <div>
        <span
          className={cn(
            'text-gray-800 font-medium tracking-[-0.5px] block mt-4',
            !areValuesVisible && 'blur-sm'
          )}
        >
          {formatCurrencyToBRL(balance)}
        </span>
        <small className="text-gray-600 text-sm">Saldo da conta</small>
      </div>
    </div>
  );
};

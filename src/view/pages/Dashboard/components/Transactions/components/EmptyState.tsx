import emptyState from '@/assets/images/empty-state.svg';

export function EmptyState() {
  return (
    <div className="flex items-center justify-center flex-col flex-1">
      <img src={emptyState} alt="Empty state" />
      <p className="text-gray-700">Não encontramos sua transação!</p>
    </div>
  );
}

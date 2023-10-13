import { EyeIcon } from '@/assets/icons/EyeIcon';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

export const Accounts = () => {
  return (
    <section className="bg-teal-900 h-full rounded-2xl p-4 md:p-10 md:px-4 md:py-8 flex flex-col">
      <div>
        <span className="tracking-[-0.5px] text-white block">Saldo Total</span>
        <div className="flex items-center gap-2">
          <strong className="text-2xl text-white tracking-[-1px]">
            R$ 100,000
          </strong>
          <button className="w-8 h-8 flex items-center justify-center">
            <EyeIcon open />
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-end flex-col">
        <div className="flex items-center justify-between">
          <strong className="text-white tracking-[-1px] text-lg">
            Minhas contas
          </strong>
          <div>
            <button className="py-3 pl-2.5 pr-3.5 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40">
              <ChevronLeftIcon className="text-white w-6 h-6" />
            </button>
            <button className="py-3 pl-2.5 pr-3.5 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40">
              <ChevronRightIcon className="text-white w-6 h-6" />
            </button>
          </div>
        </div>
        <div>contas</div>
      </div>
    </section>
  );
};

import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronDownIcon } from '@radix-ui/react-icons';

import { MONTHS } from '@/app/constants/months';
import { cn } from '@/app/utils/cn';
import { FilterIcon } from '@/assets/icons/FilterIcon';
import { TransactionsIcon } from '@/assets/icons/TransactionsIcon';
import { SLiderOption } from './components/SliderOption';
import { SLiderNavigation } from './components/SliderNavigation';
import { formatCurrencyToBRL } from '@/app/utils/formatCurrencyToBRL';
import { CategoryIcon } from '@/assets/icons/categories/CategoryIcon';
import { ConditionalRender } from '@/view/components/ConditionalRender';

import { useTransactionsController } from './useTransactionsController';
import { EmptyState } from './components/EmptyState';
import { TransactionsSpinner } from './components/TransactionsSpinner';

export const Transactions = () => {
  const { areValuesVisible, isInitialLoading, transactions, isFetching } =
    useTransactionsController();
  return (
    <section className="bg-gray-100 h-full rounded-2xl p-4 md:p-10 md:px-4 md:py-8 flex flex-col">
      <ConditionalRender
        condition={isInitialLoading}
        fallback={<TransactionsSpinner />}
      >
        <header>
          <div className="flex justify-between w-full items-center">
            <button className="flex items-center gap-2">
              <TransactionsIcon />
              <span className="text-sm text-gray-800 tracking-[-0.5px] font-medium">
                Transações
              </span>
              <ChevronDownIcon className="text-gray-900" />
            </button>
            <button>
              <FilterIcon />
            </button>
          </div>
          <div className="mt-6 relative">
            <Swiper slidesPerView={3} centeredSlides>
              {MONTHS.map((month, index) => (
                <SwiperSlide key={month}>
                  {({ isActive }) => (
                    <SLiderOption
                      isActive={isActive}
                      month={month}
                      slideIndex={index}
                    />
                  )}
                </SwiperSlide>
              ))}
              <SLiderNavigation />
            </Swiper>
          </div>
        </header>

        <ConditionalRender
          condition={isFetching}
          fallback={<TransactionsSpinner />}
        >
          <ConditionalRender
            condition={transactions.length <= 0}
            fallback={<EmptyState />}
          >
            <div className="mt-4 space-y-2 flex-1 overflow-auto">
              <div className="bg-white p-4 rounded-2xl flex items-center justify-between gap-4">
                <div className="flex-1 flex items-center gap-3">
                  <CategoryIcon type="income" />
                  <div>
                    <strong className="tracking-[-0.5px] font-bold block">
                      Almoço
                    </strong>
                    <span className="text-sm text-gray-600">12/12/2022</span>
                  </div>
                </div>
                <span
                  className={cn(
                    'font-medium tracking-[-0.5px] text-teal-800',
                    !areValuesVisible && 'blur-sm'
                  )}
                >
                  {formatCurrencyToBRL(1000)}
                </span>
              </div>
            </div>
          </ConditionalRender>
        </ConditionalRender>
      </ConditionalRender>
    </section>
  );
};

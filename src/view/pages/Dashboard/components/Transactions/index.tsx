import { Swiper, SwiperSlide } from 'swiper/react';

import { MONTHS } from '@/app/constants/months';
import { cn } from '@/app/utils/cn';
import { FilterIcon } from '@/assets/icons/FilterIcon';
import { SLiderOption } from './components/SliderOption';
import { SLiderNavigation } from './components/SliderNavigation';
import { formatCurrencyToBRL } from '@/app/utils/formatCurrencyToBRL';
import { CategoryIcon } from '@/assets/icons/categories/CategoryIcon';
import { ConditionalRender } from '@/view/components/ConditionalRender';

import { useTransactionsController } from './useTransactionsController';
import { EmptyState } from './components/EmptyState';
import { TransactionsSpinner } from './components/TransactionsSpinner';
import { TransactionsTypeDropdown } from './components/TransactionsDropdown';
import { FiltersDialog } from './components/FiltersDialog';
import { formatDate } from '@/app/utils/formatDate';
import { TransactionType } from '@/app/enums/TransactionType';

export const Transactions = () => {
  const {
    areValuesVisible,
    isInitialLoading,
    transactions,
    isFetching,
    isOpenFilters,
    filters,
    handleToggleDialogFilters,
    handleChangeFilters
  } = useTransactionsController();
  return (
    <section className="bg-gray-100 h-full rounded-2xl p-4 md:p-10 md:px-4 md:py-8 flex flex-col">
      <ConditionalRender
        condition={isInitialLoading}
        fallback={<TransactionsSpinner />}
      >
        <FiltersDialog
          open={isOpenFilters}
          onClose={handleToggleDialogFilters}
          onFilter={({ bankAccountId, year }) => {
            handleChangeFilters({ bankAccountId, year });
          }}
        />

        <header>
          <div className="flex justify-between w-full items-center">
            <TransactionsTypeDropdown
              onSelect={(type) => {
                handleChangeFilters({ type });
              }}
              activeFilter={filters.type}
            />
            <button onClick={handleToggleDialogFilters}>
              <FilterIcon />
            </button>
          </div>
          <div className="mt-6 relative">
            <Swiper
              slidesPerView={3}
              centeredSlides
              initialSlide={filters.month}
              onSlideChange={(swiper) => {
                if (filters.month === swiper.activeIndex) return;
                handleChangeFilters({ month: swiper.activeIndex });
              }}
            >
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
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="bg-white p-4 rounded-2xl flex items-center justify-between gap-4"
                >
                  <div className="flex-1 flex items-center gap-3">
                    {transaction.type === TransactionType.INCOME && (
                      <CategoryIcon type="income" />
                    )}
                    {transaction.type === TransactionType.EXPENSE && (
                      <CategoryIcon
                        type="expense"
                        category={transaction.category?.icon as any}
                      />
                    )}
                    <div>
                      <strong className="tracking-[-0.5px] font-bold block">
                        {transaction.name}
                      </strong>
                      <span className="text-sm text-gray-600">
                        {formatDate(new Date(transaction.date))}
                      </span>
                    </div>
                  </div>
                  <span
                    className={cn(
                      'font-medium tracking-[-0.5px]',
                      transaction.type === 'INCOME' && 'text-teal-800',
                      transaction.type === 'EXPENSE' && 'text-red-800',
                      !areValuesVisible && 'blur-sm'
                    )}
                  >
                    {transaction.type === 'INCOME' &&
                      `+${formatCurrencyToBRL(transaction.value)}`}
                    {transaction.type === 'EXPENSE' &&
                      `-${formatCurrencyToBRL(transaction.value)}`}
                  </span>
                </div>
              ))}
            </div>
          </ConditionalRender>
        </ConditionalRender>
      </ConditionalRender>
    </section>
  );
};

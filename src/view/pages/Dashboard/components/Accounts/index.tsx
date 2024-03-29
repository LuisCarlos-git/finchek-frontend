import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EyeIcon } from '@/assets/icons/EyeIcon';

import { AccountCart } from '../AccountCard';
import { AccountsNavigation } from '../AccountNavigation';
import { useAccountsController } from './useAccountsController';
import { formatCurrencyToBRL } from '@/app/utils/formatCurrencyToBRL';
import { cn } from '@/app/utils/cn';
import { ConditionalRender } from '@/view/components/ConditionalRender';
import { Spinner } from '@/view/components/Spinner';
import { EmptyAccounts } from './components/EmptyAccounts';

export const Accounts = () => {
  const {
    setSliderState,
    sliderState,
    areValuesVisible,
    handleToggleVisibleValues,
    accounts,
    isLoading,
    handleToggleNewAccountDialog,
    currentBalance,
    handleToggleEditAccountDialog
  } = useAccountsController();
  return (
    <section className="bg-teal-900 h-full rounded-2xl p-4 md:p-10 md:px-4 md:py-8 flex flex-col">
      <ConditionalRender
        condition={isLoading}
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <Spinner className="text-teal-950 fill-white w-10 h-10" />
          </div>
        }
      >
        <div>
          <span className="tracking-[-0.5px] text-white block">
            Saldo Total
          </span>
          <div className="flex items-center gap-2">
            <strong
              className={cn(
                'text-2xl text-white tracking-[-1px]',
                !areValuesVisible && 'blur-md'
              )}
            >
              {formatCurrencyToBRL(currentBalance)}
            </strong>
            <button
              onClick={handleToggleVisibleValues}
              className="w-8 h-8 flex items-center justify-center"
            >
              <EyeIcon open={!areValuesVisible} />
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-end flex-col">
          <ConditionalRender
            condition={accounts.length <= 0}
            fallback={
              <EmptyAccounts onAddNewAccount={handleToggleNewAccountDialog} />
            }
          >
            <div>
              <Swiper
                spaceBetween={16}
                slidesPerView={1.1}
                breakpoints={{
                  500: {
                    slidesPerView: 2.1
                  }
                }}
                onSlideChange={(ev) => {
                  setSliderState({
                    isBeginning: ev.isBeginning,
                    isEnd: ev.isEnd
                  });
                }}
              >
                <div
                  slot="container-start"
                  className="flex items-center justify-between mb-4"
                >
                  <strong className="text-white tracking-[-1px] text-lg">
                    Minhas contas
                  </strong>
                  <AccountsNavigation
                    isBeginning={sliderState.isBeginning}
                    isEnd={sliderState.isEnd}
                  />
                </div>
                {accounts.map((account) => (
                  <SwiperSlide
                    role="button"
                    key={account.id}
                    onClick={() => {
                      handleToggleEditAccountDialog(account);
                    }}
                  >
                    <AccountCart
                      balance={account.currentBalance}
                      color={account.color}
                      name={account.name}
                      type={account.type}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </ConditionalRender>
        </div>
      </ConditionalRender>
    </section>
  );
};

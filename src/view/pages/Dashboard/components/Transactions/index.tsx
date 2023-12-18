import { MONTHS } from '@/app/constants/months';
import { FilterIcon } from '@/assets/icons/FilterIcon';
import { TransactionsIcon } from '@/assets/icons/TransactionsIcon';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SLiderOption } from './components/SliderOption';
import { SLiderNavigation } from './components/SliderNavigation';

export const Transactions = () => {
  return (
    <section className="bg-gray-100 h-full rounded-2xl  p-4 md:p-10 md:px-4 md:py-8">
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
      <div className="mt-4">content</div>
    </section>
  );
};

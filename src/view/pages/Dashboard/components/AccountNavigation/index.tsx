import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useSwiper } from 'swiper/react';

interface AccountsNavigationProps {
  isEnd: boolean;
  isBeginning: boolean;
}

export const AccountsNavigation = ({
  isBeginning,
  isEnd
}: AccountsNavigationProps) => {
  const swiper = useSwiper();
  return (
    <div>
      <button
        onClick={() => {
          swiper.slidePrev();
        }}
        disabled={isBeginning}
        className="py-3 pl-2.5 pr-3.5 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40"
      >
        <ChevronLeftIcon className="text-white w-6 h-6" />
      </button>
      <button
        onClick={() => {
          swiper.slideNext();
        }}
        disabled={isEnd}
        className="py-3 pl-2.5 pr-3.5 rounded-full enabled:hover:bg-black/10 transition-colors disabled:opacity-40"
      >
        <ChevronRightIcon className="text-white w-6 h-6" />
      </button>
    </div>
  );
};

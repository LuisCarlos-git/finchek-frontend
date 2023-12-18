import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useSwiper } from 'swiper/react';

export const SLiderNavigation = () => {
  const swiper = useSwiper();
  return (
    <>
      <button
        className="z-10 absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-l from-gray-100 to-transparent flex items-center justify-center"
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <ChevronRightIcon className="w-6 text-gray-800" />
      </button>
      <button
        onClick={() => {
          swiper.slidePrev();
        }}
        className="z-10 absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-gray-100 to-transparent flex items-center justify-center"
      >
        <ChevronLeftIcon className="w-6 text-gray-800" />
      </button>
    </>
  );
};

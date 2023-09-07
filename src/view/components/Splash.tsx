import { cn } from '@/app/utils/cn';
import { Spinner } from './Spinner';
import { Logo } from './Logo';

export const Splash = () => (
  <div
    className={cn(
      'h-screen bg-teal-900 flex flex-col justify-center items-center fixed inset-0 gap-4'
    )}
  >
    <Logo className="text-white w-32" />
    <Spinner />
  </div>
);

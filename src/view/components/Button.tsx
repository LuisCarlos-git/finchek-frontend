import { cn } from '@/app/utils/cn';
import { type ComponentProps } from 'react';
import { Spinner } from './Spinner';
import { ConditionalRender } from './ConditionalRender';

interface IButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;
  variant?: 'primary' | 'danger' | 'outline';
}

export const Button = ({
  className,
  disabled,
  isLoading = false,
  children,
  variant = 'primary',
  ...props
}: IButtonProps) => (
  <button
    {...props}
    disabled={disabled ?? isLoading}
    className={cn(
      'flex justify-center items-center transition-all disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400 rounded-2xl font-medium h-12 px-3',
      variant === 'primary' && 'text-white bg-teal-900 hover:bg-teal-800',
      variant === 'danger' && 'text-white bg-red-900 hover:bg-red-800',
      variant === 'outline' &&
        'text-black w-full bg-transparent border border-black hover:bg-gray-200',
      className
    )}
  >
    <ConditionalRender
      condition={isLoading}
      fallback={
        <Spinner
          className={cn(
            variant === 'danger' && 'text-red-400 fill-red-900',
            variant === 'outline' && 'text-gray-400 animate-spin fill-black'
          )}
        />
      }
    >
      {children}
    </ConditionalRender>
  </button>
);

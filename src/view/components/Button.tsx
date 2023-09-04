import { cn } from '@/app/utils/cn';
import { type ComponentProps } from 'react';

interface IButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;
}

export const Button = ({
  className,
  disabled,
  isLoading,
  ...props
}: IButtonProps) => (
  <button
    {...props}
    disabled={disabled ?? isLoading}
    className={cn(
      'transition-all text-white bg-teal-900 hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400 rounded-2xl font-medium h-12 px-3',
      className
    )}
  />
);

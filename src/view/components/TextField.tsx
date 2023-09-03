import { forwardRef, type ComponentProps } from 'react';
import { CrossCircledIcon } from '@radix-ui/react-icons';

import { cn } from '@/app/utils/cn';

interface ITextFieldProps extends ComponentProps<'input'> {
  name: string;
  error?: string;
}

export const TextField = forwardRef<HTMLInputElement, ITextFieldProps>(
  ({ placeholder, name, id, error, className, ...props }, ref) => {
    const inputId = id ?? name;

    return (
      <div className="relative">
        <input
          {...props}
          id={inputId}
          name={name}
          ref={ref}
          className={cn(
            `focus:border-gray-800 transition-all outline-none bg-white rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 w-full  pt-4 placeholder-shown:pt-0 peer`,
            !!error && '!border-red-900',
            className
          )}
          placeholder=" "
        />
        <label
          htmlFor={inputId}
          className="transition-all absolute text-xs top-2 left-[13px] pointer-events-none text-gray-700 peer-placeholder-shown:text-base  peer-placeholder-shown:top-3.5"
        >
          {placeholder}
        </label>
        {!!error && (
          <div className="flex gap-2 items-center mt-2 text-red-900">
            <CrossCircledIcon />
            <span className="text-xs">{error}</span>
          </div>
        )}
      </div>
    );
  }
);

TextField.displayName = 'TextField';

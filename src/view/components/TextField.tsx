import { forwardRef, type ComponentProps } from 'react';
import { cn } from '@/app/utils/cn';
import { ErrorMessage } from './ErrorMessage';

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
        <ErrorMessage error={error} />
      </div>
    );
  }
);

TextField.displayName = 'TextField';

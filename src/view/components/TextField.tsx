import { type ComponentProps } from 'react';
import { useFormContext } from 'react-hook-form';

import { cn } from '@/app/utils/cn';
import { ErrorMessage } from './ErrorMessage';

interface ITextFieldProps extends ComponentProps<'input'> {
  name: string;
}

export const TextField = ({
  placeholder,
  name,
  id,
  className,
  ...props
}: ITextFieldProps) => {
  const inputId = id ?? name;
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const isError = !!errors?.[name]?.message;

  return (
    <div className="relative">
      <input
        {...props}
        id={inputId}
        placeholder=" "
        {...register(name)}
        className={cn(
          `focus:border-gray-800 transition-all outline-none bg-white rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 w-full  pt-4 placeholder-shown:pt-0 peer`,
          isError && '!border-red-900',
          className
        )}
      />
      <label
        htmlFor={inputId}
        className="transition-all absolute text-xs top-2 left-[13px] pointer-events-none text-gray-700 peer-placeholder-shown:text-base  peer-placeholder-shown:top-3.5"
      >
        {placeholder}
      </label>
      <ErrorMessage field={name} />
    </div>
  );
};

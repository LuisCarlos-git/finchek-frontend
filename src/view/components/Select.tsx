import * as RdxSelect from '@radix-ui/react-select';

import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { cn } from '@/app/utils/cn';
import { useState } from 'react';
import { ErrorMessage } from './ErrorMessage';

interface ISelectProps {
  className?: string;
  error?: string;
  placeholder?: string;
  options: Array<{
    value: string;
    label: string;
  }>;
  onChange?: (value: string) => void;
  value?: string;
}

export function Select({
  className,
  error,
  placeholder,
  options,
  onChange,
  value
}: ISelectProps) {
  const [slectedValue, setSelectedValue] = useState(value ?? '');

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onChange?.(value);
  };
  return (
    <div>
      <RdxSelect.Root value={value} onValueChange={handleSelect}>
        <div className="relative">
          <label
            className={cn(
              'absolute z-10 top-1/2 -translate-y-1/2 left-3 pointer-events-none text-gray-700',
              slectedValue &&
                'text-xs left-[13px] top-2 transition-all translate-y-0'
            )}
          >
            {placeholder}
          </label>
          <RdxSelect.Trigger
            className={cn(
              `focus:border-gray-800 relative pt-4 transition-all text-left outline-none bg-white rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 w-full`,
              !!error && '!border-red-900',
              className
            )}
          >
            <RdxSelect.Value />
            <RdxSelect.Icon className="absolute right-3 top-4">
              <ChevronDownIcon className="h-6 w-6 text-gray-800" />
            </RdxSelect.Icon>
          </RdxSelect.Trigger>
        </div>
        <RdxSelect.Portal>
          <RdxSelect.Content className="z-[99] overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-md">
            <RdxSelect.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-gray-800 cursor-default">
              <ChevronUpIcon />
            </RdxSelect.ScrollUpButton>
            <RdxSelect.Viewport className="p-2">
              {options.map((option) => (
                <RdxSelect.Item
                  key={option.value}
                  className=" cursor-pointer p-2 text-sm text-gray-800 outline-none data-[state=checked]:font-bold data-[state=highlighted]:bg-gray-50 rounded-lg transition-colors"
                  value={option.value}
                >
                  <RdxSelect.ItemText>{option.label}</RdxSelect.ItemText>
                </RdxSelect.Item>
              ))}
            </RdxSelect.Viewport>
            <RdxSelect.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-gray-800 cursor-default">
              <ChevronDownIcon />
            </RdxSelect.ScrollDownButton>
          </RdxSelect.Content>
        </RdxSelect.Portal>
      </RdxSelect.Root>
      <ErrorMessage error={error} />
    </div>
  );
}

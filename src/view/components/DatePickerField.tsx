import { cn } from '@/app/utils/cn';
import { useState } from 'react';
import { formatDate } from '@/app/utils/formatDate';
import { Popover } from './Popover';
import { DatePicker } from './DatePicker';
import { ErrorMessage } from './ErrorMessage';

interface IDatePickerProps {
  className?: string;
  error?: string;
}

export function DatePickerField({ className, error }: IDatePickerProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <Popover.Root>
        <Popover.Trigger>
          <button
            type="button"
            className={cn(
              `text-left focus:border-gray-800 transition-all pt-4 outline-none bg-white rounded-lg border relative border-gray-500 px-3 h-[52px] text-gray-800 w-full`,
              !!error && '!border-red-900',
              className
            )}
          >
            <span className="block text-gray-700 text-xs absolute top-2 pointer-events-none">
              Data
            </span>
            <span>{formatDate(selectedDate)}</span>
          </button>
        </Popover.Trigger>
        <Popover.Content>
          <DatePicker value={selectedDate} onChange={setSelectedDate} />
        </Popover.Content>
      </Popover.Root>

      <ErrorMessage error={error} />
    </div>
  );
}

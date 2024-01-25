import { NumericFormat } from 'react-number-format';
import { ConditionalRender } from './ConditionalRender';
import { CrossCircledIcon } from '@radix-ui/react-icons';

interface TextFieldCurrencyProps {
  error?: string;
  onChange?: (value: string) => void;
  value?: string;
}

export function TextFieldCurrency({
  error,
  onChange,
  value
}: TextFieldCurrencyProps) {
  return (
    <div>
      <NumericFormat
        type="text"
        className="text-gray-800 text-3xl font-bold tracking-[-1px] outline-none w-full"
        thousandSeparator="."
        decimalSeparator=","
        defaultValue={value}
        onChange={(event) => {
          onChange?.(event.target.value);
        }}
      />
      <ConditionalRender condition={!error} fallback={null}>
        <div className="flex gap-2 items-center mt-2 text-red-900">
          <CrossCircledIcon />
          <span className="text-xs">{error}</span>
        </div>
      </ConditionalRender>
    </div>
  );
}

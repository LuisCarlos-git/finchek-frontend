import { NumericFormat } from 'react-number-format';

export function TextFieldCurrecy() {
  return (
    <NumericFormat
      type="text"
      className="text-gray-800 text-3xl font-bold tracking-[-1px] outline-none w-full"
      thousandSeparator="."
      decimalSeparator=","
      defaultValue="0,00"
    />
  );
}

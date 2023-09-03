import { type ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {}

export const Button = (props: ButtonProps) => (
  <button
    {...props}
    className="transition-all text-white bg-teal-900 hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400 rounded-2xl font-medium h-12 px-3"
  />
);

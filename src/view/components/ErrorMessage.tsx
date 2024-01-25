import { CrossCircledIcon } from '@radix-ui/react-icons';
import { useFormContext } from 'react-hook-form';

interface IErrorMessageProps {
  field: string;
}

export function ErrorMessage({ field }: IErrorMessageProps) {
  const {
    formState: { errors }
  } = useFormContext();

  const error = errors?.[field]?.message as string;

  if (!error) return null;

  return (
    <div className="flex gap-2 items-center mt-2 text-red-900">
      <CrossCircledIcon />
      <span className="text-xs">{error}</span>
    </div>
  );
}

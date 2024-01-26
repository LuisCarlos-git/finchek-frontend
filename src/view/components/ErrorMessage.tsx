import { CrossCircledIcon } from '@radix-ui/react-icons';
import { ConditionalRender } from './ConditionalRender';

interface IErrorMessageProps {
  error?: string;
}

export function ErrorMessage({ error }: IErrorMessageProps) {
  return (
    <ConditionalRender condition={!error} fallback={null}>
      <div className="flex gap-2 items-center mt-2 text-red-900">
        <CrossCircledIcon />
        <span className="text-xs">{error}</span>
      </div>
    </ConditionalRender>
  );
}

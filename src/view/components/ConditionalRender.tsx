import { type ReactNode } from 'react';

interface IConditionalRenderProps {
  fallback: JSX.Element | null;
  condition: boolean;
  children: ReactNode;
}

export const ConditionalRender = ({
  children,
  condition,
  fallback
}: IConditionalRenderProps) => (condition ? <>{fallback}</> : <>{children}</>);

import { cn } from '@/app/utils/cn';
import * as RdxPopover from '@radix-ui/react-popover';
import React from 'react';

interface IDefaultPropsComponents {
  className?: string;
  children: React.ReactNode;
}

export function Root({ children }: Omit<IDefaultPropsComponents, 'className'>) {
  return <RdxPopover.Root>{children}</RdxPopover.Root>;
}
export function Trigger({ children }: IDefaultPropsComponents) {
  return <RdxPopover.Trigger asChild>{children}</RdxPopover.Trigger>;
}
export function Content({ children, className }: IDefaultPropsComponents) {
  return (
    <RdxPopover.Portal>
      <RdxPopover.Content
        className={cn(
          'z-[99] rounded-2xl p-2 bg-white space-y-2 shadow-md data-[state=open]:animate-slide-up-and-fade data-[state=closed]:animate-slide-down-and-fade',
          className
        )}
      >
        {children}
      </RdxPopover.Content>
    </RdxPopover.Portal>
  );
}

export const Popover = {
  Root,
  Content,
  Trigger
};

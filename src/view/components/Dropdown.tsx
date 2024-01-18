import React from 'react';
import * as RdxDropdown from '@radix-ui/react-dropdown-menu';

import { cn } from '@/app/utils/cn';

interface ComponentWithChildren {
  children: React.ReactNode;
}

interface ItemProps extends ComponentWithChildren {
  className?: string;
  onSelect?: () => void;
}

interface ContentProps extends ComponentWithChildren {
  className?: string;
}

function Root({ children }: ComponentWithChildren) {
  return <RdxDropdown.Root>{children}</RdxDropdown.Root>;
}

function Trigger({ children }: ComponentWithChildren) {
  return (
    <RdxDropdown.Trigger className="outline-none">
      {children}
    </RdxDropdown.Trigger>
  );
}

function Item({ children, className, onSelect }: ItemProps) {
  return (
    <RdxDropdown.Item
      onSelect={onSelect}
      className={cn(
        ' cursor-pointer min-h-[48px] outline-none flex items-center py-2 px-4 text-sm text-gray-800transition-colors rounded-2xl data-[highlighted]:bg-gray-50',
        className
      )}
    >
      {children}
    </RdxDropdown.Item>
  );
}

function Content({ children, className }: ContentProps) {
  return (
    <RdxDropdown.Portal>
      <RdxDropdown.Content
        sideOffset={4}
        className={cn(
          'rounded-2xl p-2 bg-white space-y-2 shadow-md data-[side=top]:animate-slide-up-and-fade data-[side=bottom]:animate-slide-down-and-fade',
          className
        )}
      >
        {children}
      </RdxDropdown.Content>
    </RdxDropdown.Portal>
  );
}

export const Dropdown = {
  Root,
  Trigger,
  Content,
  Item
};

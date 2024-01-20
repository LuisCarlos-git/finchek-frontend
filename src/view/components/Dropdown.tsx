import React from 'react';
import * as RdxDropdown from '@radix-ui/react-dropdown-menu';

import { cn } from '@/app/utils/cn';

interface IDefaultPropsComponent {
  children: React.ReactNode;
  className?: string;
}

interface ItemProps extends IDefaultPropsComponent {
  onSelect?: () => void;
}

function Root({ children }: Omit<IDefaultPropsComponent, 'className'>) {
  return <RdxDropdown.Root>{children}</RdxDropdown.Root>;
}

function Trigger({ children, className }: IDefaultPropsComponent) {
  return (
    <RdxDropdown.Trigger className={cn('outline-none', className)}>
      {children}
    </RdxDropdown.Trigger>
  );
}

function Item({ children, className, onSelect }: ItemProps) {
  return (
    <RdxDropdown.Item
      onSelect={onSelect}
      className={cn(
        'cursor-pointer min-h-[48px] outline-none flex items-center py-2 px-4 text-sm text-gray-800transition-colors rounded-2xl data-[highlighted]:bg-gray-50',
        className
      )}
    >
      {children}
    </RdxDropdown.Item>
  );
}

function Content({ children, className }: IDefaultPropsComponent) {
  return (
    <RdxDropdown.Portal>
      <RdxDropdown.Content
        sideOffset={4}
        className={cn(
          'z-50 rounded-2xl p-2 bg-white space-y-2 shadow-md data-[state=open]:animate-slide-up-and-fade data-[state=closed]:animate-slide-down-and-fade',
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

import * as RdxDropdown from '@radix-ui/react-dropdown-menu';
import React from 'react';

interface ComponentWithChildren {
  children: React.ReactNode;
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

function Item({ children }: ComponentWithChildren) {
  return (
    <RdxDropdown.Item className="min-h-[48px] outline-none flex items-center p-2 text-sm text-gray-800 hover:bg-gray-50">
      {children}
    </RdxDropdown.Item>
  );
}

function Content({ children }: ComponentWithChildren) {
  return (
    <RdxDropdown.Portal>
      <RdxDropdown.Content className="rounded-2xl p-2 bg-white space-y-2 shadow-md">
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

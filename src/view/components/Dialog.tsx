import { cn } from '@/app/utils/cn';
import * as RdxDialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import React from 'react';

interface IDialogProps {
  open: boolean;
  children: React.ReactNode;
  title: string;
  rightAction?: React.ReactNode;
  onClose: () => void;
}

export function Dialog({
  onClose,
  children,
  open,
  title,
  rightAction
}: IDialogProps) {
  return (
    <RdxDialog.Root open={open} onOpenChange={onClose}>
      <RdxDialog.Portal>
        <RdxDialog.Overlay
          className={cn(
            'backdrop-blur-sm inset-0 fixed z-50 bg-black/80 ',
            'data-[state=open]:animate-overlay-show',
            'data-[state=closed]:animate-overlay-close'
          )}
        />
        <RdxDialog.Content
          className={cn(
            'bg-white p-6 space-y-10 rounded-2xl z-[51] shadow-md w-full md:max-w-[400px] max-w-[350px] outline-none',
            'fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2',
            'data-[state=open]:animate-content-show',
            'data-[state=closed]:animate-content-close'
          )}
        >
          <header className="flex items-center justify-between h-12 text-gray-800">
            <button
              onClick={onClose}
              className="w-12 h-12 flex items-center justify-center outline-none"
            >
              <Cross2Icon className="w-6 h-6" />
            </button>
            <span className="text-lg tracking-[-1px] font-bold">{title}</span>
            <div className="w-12 h-12 flex items-center justify-center outline-none">
              {rightAction}
            </div>
          </header>
          <div>{children}</div>
        </RdxDialog.Content>
      </RdxDialog.Portal>
    </RdxDialog.Root>
  );
}

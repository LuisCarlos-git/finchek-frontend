import { type ReactNode } from 'react';

export interface IDashboardContext {
  areValuesVisible: boolean;
  newAccountDialogOpen: boolean;
  handleToggleVisibleValues: () => void;
  handleToggleNewAccountDialog: () => void;
}
export interface IDashboardProvider {
  children: ReactNode;
}

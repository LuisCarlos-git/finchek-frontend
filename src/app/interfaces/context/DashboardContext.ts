import { type ReactNode } from 'react';

export interface IDashboardContext {
  areValuesVisible: boolean;
  handleToggleVisibleValues: () => void;
}
export interface IDashboardProvider {
  children: ReactNode;
}

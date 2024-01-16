import { type StorageKeys } from '@/app/enums/StorageKeys';

export type Key = StorageKeys;

export interface ISetValueParams {
  key: Key;
  value: unknown;
}

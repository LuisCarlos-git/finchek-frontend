import { type StorageKeys } from '@/app/Enums/StorageKeys';

export type Key = StorageKeys;

export interface ISetValueParams {
  key: Key;
  value: unknown;
}

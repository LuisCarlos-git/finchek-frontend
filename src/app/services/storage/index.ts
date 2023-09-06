import {
  type ISetValueParams,
  type Key
} from '@/app/interfaces/services/Storage';

class Storage {
  private readonly storage = localStorage;

  get(key: Key) {
    const value = this.storage.getItem(key);

    if (!value) return null;

    return JSON.parse(value);
  }

  set({ key, value }: ISetValueParams) {
    const parsedValue = JSON.stringify(value);
    this.storage.setItem(key, parsedValue);
  }

  remove(key: Key) {
    this.storage.removeItem(key);
  }
}

export const storage = new Storage();

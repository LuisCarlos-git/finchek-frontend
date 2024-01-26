import {
  type IUpdateBankAccountParams,
  type ICreateBankAccount
} from '@/app/interfaces/services/BankAccountsService';
import { httpClient } from './httpClient';
import { Endpoints } from '@/app/enums/Endpoints';
import { type IBankAccount } from '@/app/interfaces/entities/BankAccount';

class BankAccountsService {
  public async create(body: ICreateBankAccount) {
    return await httpClient.post(Endpoints.BANK_ACCOUNTS, body);
  }

  public async getAll() {
    const response = await httpClient.get<IBankAccount[]>(
      Endpoints.BANK_ACCOUNTS
    );

    return response.data;
  }

  public async update(body: IUpdateBankAccountParams) {
    const { id, ...restBody } = body;
    const response = await httpClient.put(
      `${Endpoints.BANK_ACCOUNTS}/${id}`,
      restBody
    );

    return response;
  }
}

export const bankAccountsService = new BankAccountsService();

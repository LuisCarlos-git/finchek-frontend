import {
  type IUpdateBankAccountParams,
  type ICreateBankAccount,
  type IGetAllBankAccounts
} from '@/app/interfaces/services/BankAccountsService';

import { Endpoints } from '@/app/enums/Endpoints';

import { httpClient } from './httpClient';

class BankAccountsService {
  public async create(body: ICreateBankAccount) {
    return await httpClient.post(Endpoints.BANK_ACCOUNTS, body);
  }

  public async getAll() {
    const response = await httpClient.get<IGetAllBankAccounts>(
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

  public async delete(id: string) {
    return await httpClient.delete(`${Endpoints.BANK_ACCOUNTS}/${id}`);
  }
}

export const bankAccountsService = new BankAccountsService();

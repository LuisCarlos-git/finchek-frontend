import {
  type IGetAllBankAccountsResponse,
  type ICreateBankAccountParams
} from '@/app/interfaces/services/BankAccountsService';
import { httpClient } from './httpClient';
import { Endpoints } from '@/app/enums/Endpoints';

class BankAccountsService {
  public async createBankAccount(body: ICreateBankAccountParams) {
    return await httpClient.post(Endpoints.BANK_ACCOUNTS, body);
  }

  public async getAll() {
    const response = await httpClient.get<IGetAllBankAccountsResponse[]>(
      Endpoints.BANK_ACCOUNTS
    );

    return response.data;
  }
}

export const bankAccountsService = new BankAccountsService();

import { type CreateBankAccountParams } from '@/app/interfaces/services/BankAccountsService';
import { httpClient } from './httpClient';
import { Endpoints } from '@/app/enums/Endpoints';

class BankAccountsService {
  public async createBankAccount(body: CreateBankAccountParams) {
    return await httpClient.post(Endpoints.CREATE_BANK_ACCOUNTS, body);
  }
}

export const bankAccountsService = new BankAccountsService();

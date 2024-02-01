import { Endpoints } from '@/app/enums/Endpoints';
import { httpClient } from './httpClient';
import {
  type ITransactionResponse,
  type ICreateOrUpdateTransactionRequest,
  type IGetAllTransactionsParams
} from '@/app/interfaces/services/TransactionsService';

class TransactionsService {
  async create(body: ICreateOrUpdateTransactionRequest) {
    const { data } = await httpClient.post<ITransactionResponse>(
      Endpoints.TRANSACTIONS,
      body
    );

    return data;
  }

  public async getAll(params: IGetAllTransactionsParams) {
    const response = await httpClient.get<ITransactionResponse[]>(
      Endpoints.TRANSACTIONS,
      {
        params
      }
    );

    return response.data;
  }
}

export const transactionsService = new TransactionsService();

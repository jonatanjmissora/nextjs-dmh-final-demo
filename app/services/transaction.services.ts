import { getData, postData } from "./direct.services"

export const postTransaction = async (accountId: string, newTransaction: object, token: string) => {
  return postData(`api/accounts/${accountId}/transactions`, newTransaction, token)
}

export const getTransaction = async (accountId: string, token: string, transactionId: string) => {
  return getData(`api/accounts/${accountId}/transactions/${transactionId}`, token)
}
import { postData } from "./direct.services"

export const postDeposit = async (accountId: string, newDeposit: object, token: string) => {
  return postData(`api/accounts/${accountId}/deposits`, newDeposit, token)
}
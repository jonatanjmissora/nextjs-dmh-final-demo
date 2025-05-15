import { getData, patchData } from "./direct.services"

export const getAccountData = async (token: string) => {
  return getData("api/account", token)
}

export const editAlias = async (accountId: string, dataObj: object, token: string) => {
  return await patchData(`api/accounts/${accountId}`, dataObj, token)
}
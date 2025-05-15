import { getData, patchData } from "./direct.services"
import { httpPost } from "./http.services"

export const getUserData = async (userId: string, token: string) => {
  return getData(`api/users/${userId}`, token,)
}

export const userEdit = async (userId: string, dataObj: object, token: string) => {
  return patchData(`api/users/${userId}`, dataObj, token)
}

export const updateUserCookies = async (dataObj: object) => {
  return httpPost(`api/updateCookies`, dataObj)
}
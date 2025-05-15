import { deleteData, getData, postData } from "./direct.services"

export const getCardsData = async (accountId: string, token: string) => {
  return getData(`api/accounts/${accountId}/cards`, token)
}

export const getCardData = async (cardId: string, accountId: string, token: string) => {
  return getData(`api/accounts/${accountId}/cards/${cardId}`, token)
}

export const deleteCard = async (cardId: string, accountId: string, token: string) => {
  return deleteData(`api/accounts/${accountId}/cards/${cardId}`, token)
}

export const postCard = async (accountId: string, newCard: object, token: string) => {
  return postData(`api/accounts/${accountId}/cards`, newCard, token)
}
export const getCardLast4 = (cardNumber: number) => {
  return cardNumber.toString().substring(cardNumber.toString().length - 4)
}

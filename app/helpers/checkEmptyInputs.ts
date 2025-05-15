export const checkEmptyInputs = (cardLibNumber: string | undefined, cardLibName: string | undefined, cardLibExpiry: string | undefined, cardLibCvc: string | undefined) => {
  const oneUndefined = cardLibNumber === undefined || cardLibName === undefined || cardLibExpiry === undefined || cardLibCvc === undefined
  const oneEmpty = cardLibNumber === "" || cardLibName === "" || cardLibExpiry === "" || cardLibCvc === ""
  return oneUndefined || oneEmpty
}
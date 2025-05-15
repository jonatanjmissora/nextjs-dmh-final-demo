export type CardDataTypes = {
  id: number;
  account_id: number;
  number_id: number;
  first_last_name: string;
  cod: number;
  expiration_date: string;
}

export type CardFormDataType = {
  number: string;
  name: string;
  expiry: string;
  cvc: string;
  focus?: string;
}

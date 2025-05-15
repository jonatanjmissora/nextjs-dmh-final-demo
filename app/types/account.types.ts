export type AccountDataTypes = {
  id: number;
  user_id: number;
  cvu: string;
  alias: string;
  available_amount: number;
}

export type ActivityDataTypes = {
  id: number;
  account_id: number;
  type: string;
  description: string;
  origin?: string;
  destination?: string;
  amount: number;
  dated: string;
  error?: string;
}

export type AliasType = {
  alias: string;
}
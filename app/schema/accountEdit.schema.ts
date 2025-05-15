import * as yup from 'yup';

const requiredRes = (label: string) => {
  return `Por favor, complete su ${label}`;
};

export const aliasEditSchema = yup
  .object({
    alias: yup
      .string().required(requiredRes('alias'))
      .matches(/^[a-z]{3,}\.[a-z]{3,}\.[a-z]{3,}$/i, "Alias mal construido"),

  })
  .required();
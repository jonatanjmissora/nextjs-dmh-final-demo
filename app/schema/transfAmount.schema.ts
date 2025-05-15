import * as yup from 'yup';

export const amountSchema = yup
  .object()
  .shape({
    amount: yup.string().required("Valor requerido")
      .matches(/^[0-9]*[,]{0,1}[.]{0,1}[0-9]*$/i, "Valor con caracteres no permitidos"),
  })
  .required();
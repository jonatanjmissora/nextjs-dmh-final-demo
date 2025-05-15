import * as yup from 'yup';

export const mailSchema = yup
  .object({
    email: yup
      .string()
      .required('Por favor, complete su e-mail')
      .matches(
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/i,
        'E-mail incorrecto. Vuelva a intentarlo'
      ),
  })
  .required();



export const passwordSchema = yup
  .object({
    password: yup
      .string()
      .required('Por favor, complete contraseña')
      .min(6, 'Contraseña con un mínimo de 6 caracteres')
      .max(20, 'Contraseña con un máximo de 20 caracteres'),
  })
  .required();
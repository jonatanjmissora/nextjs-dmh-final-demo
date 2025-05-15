import * as yup from 'yup';

const ERRORTEXT = {
  email: 'E-mail incorrecto. Vuelva a intentarlo',
  dni: 'DNI mínimo de 7 dígitos numéricos',
  phone: 'Telefono mínimo de 9 dígitos',
};

const requiredRes = (label: string) => {
  return `Por favor, complete su ${label}`;
};

export const emailEditSchema = yup
  .object({
    email: yup
      .string().required(requiredRes('email'))
      .matches(
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/i,
        'E-mail incorrecto. Vuelva a intentarlo'
      ),

  })
  .required();

export const firstnameEditSchema = yup
  .object({
    firstname: yup.string().required(requiredRes('nombre'))
      .matches(/^[a-z, A-Z]+$/i, "Nombre con caracteres no permitidos")
      .min(3, 'Nombre con un mínimo de 3 caracteres')
      .max(15, 'Nombre con un máximo de 15 caracteres'),

  })
  .required();

export const lastnameEditSchema = yup
  .object({
    lastname: yup.string().required(requiredRes('apellido'))
      .matches(/^[a-z, A-Z]+$/i, "Apellido con caracteres no permitidos")
      .min(3, 'Apellido con un mínimo de 3 caracteres')
      .max(11, 'Apellido con un máximo de 11 caracteres'),

  })
  .required();

export const phoneEditSchema = yup
  .object({
    phone: yup
      .string().required(requiredRes('teléfono'))
      .matches(/^[0-9]+$/i, "Teléfono con caracteres no permitidos")
      .min(9, 'Teléfono con un mínimo de 9 números')
      .max(13, 'Teléfono con un máximo de 13 números'),

  })
  .required();
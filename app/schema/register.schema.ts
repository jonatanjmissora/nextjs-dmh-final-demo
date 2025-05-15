import * as yup from 'yup';

const requiredRes = (label: string) => {
  return `Por favor, complete su ${label}`;
};

export const registerSchema = yup
  .object()
  .shape({
    firstname: yup.string().required(requiredRes('nombre'))
      .matches(/^[a-z, A-Z]+$/i, "Nombre con caracteres no permitidos")
      .min(3, 'Nombre con un mínimo de 3 caracteres')
      .max(11, 'Nombre con un máximo de 11 caracteres'),
    lastname: yup.string().required(requiredRes('apellido'))
      .matches(/^[a-z, A-Z]+$/i, "Apellido con caracteres no permitidos")
      .min(3, 'Apellido con un mínimo de 3 caracteres')
      .max(11, 'Apellido con un máximo de 11 caracteres'),
    dni: yup
      .string().required(requiredRes('dni'))
      .matches(/^[0-9]+$/i, "Dni con caracteres no permitidos")
      .min(7, 'Dni con un mínimo de 7 números')
      .max(8, 'Dni con un máximo de 8 números'),
    email: yup
      .string().required(requiredRes('email'))
      .matches(
        /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/i,
        'E-mail incorrecto. Vuelva a intentarlo'
      ),
    password: yup
      .string().required(requiredRes('contraseña'))
      .min(6, 'Contraseña con un mínimo de 6 caracteres')
      .max(20, 'Contraseña con un máximo de 20 caracteres')
      .matches(/[0-9]/, 'Contraseña con al menos un número')
      .matches(/[a-z]/, 'Contraseña con al menos una minúscula')
      .matches(/[A-Z]/, 'Contraseña con al menos una mayúscula')
      .matches(/[^\w]/, 'Contraseña con al menos un caracter especial'),
    password2: yup
      .string().required(requiredRes('confirmación'))
      .oneOf([yup.ref('password')], 'Las contraseñas no coinciden'),
    phone: yup
      .string().required(requiredRes('teléfono'))
      .matches(/^[0-9]+$/i, "Teléfono con caracteres no permitidos")
      .min(9, 'Teléfono con un mínimo de 9 números')
      .max(13, 'Teléfono con un máximo de 13 números'),
  })
  .required();

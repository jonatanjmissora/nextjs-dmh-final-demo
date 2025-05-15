import { useFormContext, useWatch } from "react-hook-form";

type InputFormTypes = {
  className?: string;
  label: string;
  placeholder: string;
  defaultValue?: string;
  type: string;
  setActualFocus?: React.Dispatch<React.SetStateAction<string>>;
  error?: string;
};

export const InputForm = ({
  className,
  label,
  placeholder,
  defaultValue,
  type,
  setActualFocus,
  error
}: InputFormTypes) => {

  const {
    register,
  } = useFormContext();

  const [hasPassword, hasPassword2] = useWatch({
    name: ['password', 'password2'],
  });

  const handleFocus = () => {
    if (setActualFocus)
      setActualFocus(label)
  }

  // clases para mostrar cuando hay error,
  // y cambiar el tamaño de los puntos en el password
  const isPassword = label === 'password';
  const isPassword2 = label === 'password2';
  const inputClassHasValue = isPassword && hasPassword && 'text-2xl py-0 leading-none';
  const inputClassHasValue2 = isPassword2 && hasPassword2 && 'text-2xl py-0 leading-none';
  const inputClassHasError = error !== '' && 'outline-[3px] outline-red-700';

  return (
    <input
      className={`input-form ${inputClassHasValue} ${inputClassHasValue2} ${inputClassHasError} ${className}`}
      placeholder={placeholder}
      defaultValue={defaultValue}
      type={type}
      {...register(label)}
      autoComplete="on"
      onFocus={handleFocus}
    />
  );
}
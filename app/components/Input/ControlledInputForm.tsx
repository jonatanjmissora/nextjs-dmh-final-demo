import { useState } from "react";
import { useFormContext } from "react-hook-form";

type ControlledInputFormProps = {
  className: string;
  label: string;
  placeholder: string;
  type: string;
  setActualFocus?: React.Dispatch<React.SetStateAction<string>>;
  error: string;
}

const inputMax = {
  "number": 16,
  "name": 17,
  "expiry": 4,
  "cvc": 3,
} as { [key: string]: number }

export default function ControlledInputForm({ className, label, placeholder, type, setActualFocus, error }: ControlledInputFormProps) {

  const [inputValue, setInputValue] = useState<string>("")

  // clases para mostrar cuando hay error,
  const inputClassHasError = error !== '' && 'outline-[3px] outline-red-700';

  const {
    register,
  } = useFormContext();

  const handleFocus = () => {
    if (setActualFocus)
      setActualFocus(label)
  }

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      setInputValue(prev => prev.slice(0, -1))
    }
    else
      // if (!isNaN(Number(e.key)) && inputValue.length < inputMax[label])
      //     setInputValue(prev => prev + e.key)

      if (inputValue.length < inputMax[label]) {
        if (label === "name") {
          setInputValue(prev => prev + e.key)
        }
        else if (!isNaN(Number(e.key)))
          setInputValue(prev => prev + e.key)
      }

  }

  return (
    <input
      className={`input-form ${inputClassHasError} ${className}`}
      placeholder={placeholder}
      value={inputValue}
      type={type}
      {...register(label)}
      autoComplete="on"
      onFocus={handleFocus}
      onKeyUp={handleKeyUp}
    />
  );
}

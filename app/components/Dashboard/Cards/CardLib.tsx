"use client"
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css'

type CardLibProps = {
  cvc: number;
  expiry: string;
  name: string;
  number: number;
  focus?: any;
}

export default function CardLib({ cvc, expiry, name, number, focus }: CardLibProps) {
  return (
    <Cards
      cvc={cvc}
      expiry={expiry}
      name={name}
      number={number}
      focused={focus}
    />
  )
}

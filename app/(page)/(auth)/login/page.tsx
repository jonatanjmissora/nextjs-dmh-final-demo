"use client"

import { MailForm } from "@/app/components/Login/MailForm";
import { PasswordForm } from "@/app/components/Login/PasswordForm";
import { useState } from "react";

export default function Login() {
  const [mailValue, setMailValue] = useState<string>('');
  const [step, setStep] = useState<number>(1);
  const [loginError, setLoginError] = useState<string>("")

  return (
    <section className="form-container  pt-[45%] sm:pt-[30%] xl:pt-[10%]">
      {step === 1 && <MailForm setStep={setStep} setMailValue={setMailValue} loginError={loginError} />}

      {step === 2 && <PasswordForm setStep={setStep} mailValue={mailValue} setLoginError={setLoginError} />}
    </section>
  )
}

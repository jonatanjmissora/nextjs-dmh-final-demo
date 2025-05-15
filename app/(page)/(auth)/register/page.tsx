'use client';

import { InputForm } from "@/app/components/Input/InputForm";
import { SubmitForm } from "@/app/components/Button/SubmitForm";
import { registerSchema } from "@/app/schema/register.schema";
import { register } from "@/app/services/auth.services";
import { RegisterTypes } from "@/app/types/auth.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

export default function Register() {

  const router = useRouter();

  const registerMethods = useForm<RegisterTypes>({
    resolver: yupResolver(registerSchema),
  });

  const {
    handleSubmit,
    setFocus,
    formState: { errors, isSubmitting },
  } = registerMethods;

  const [registerError, setRegisterError] = useState<string>("")

  useEffect(() => {
    setFocus('firstname');
  }, [setFocus]);

  const onSubmit: SubmitHandler<RegisterTypes> = async (data) => {

    router.push("/login")

  }

  return (
    <section className="form-container pt-[6%] sm:pt-[30%] xl:pt-[5%]">

      <FormProvider {...registerMethods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[300px] flex flex-col gap-8 justify-center items-center sm:w-[80%] sm:gap-8 xl:gap-6 xl:w-[55%]"
        >
          <h4 className="text-white text-center mb-3 text-[2.1rem] font-[700] tracking-wider xl:text-2xl">
            Crear cuenta
          </h4>

          <div className="w-full grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-16 xl:gap-y-8">
            <InputForm
              className=""
              label="firstname"
              type="text"
              placeholder="Nombre*"
              error={errors?.firstname?.message || ''}
            />

            <InputForm
              className=""
              label="lastname"
              type="text"
              placeholder="Apellido*"
              error={errors?.lastname?.message || ''}
            />

            <InputForm
              className=""
              label="dni"
              type="text"
              placeholder="DNI*"
              error={errors?.dni?.message || ''}
            />

            <InputForm
              className=""
              label="email"
              type="mail"
              placeholder="Correo electrónico*"
              error={errors?.email?.message || ''}
            />
          </div>
          <p className="text-gray-300 text-[11px] text-center w-full
          sm:text-[13.5px] sm:w-max xl:text-[1.1rem] 2xl:text-[1.05rem]">
            Usa entre 6 y 20 carácteres (debe contener al menos al menos 1
            carácter especial, una mayúscula y un número)
          </p>

          <div className="w-full grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-16 xl:gap-y-8">
            <InputForm
              className=""
              label="password"
              type="password"
              placeholder="Contraseña*"
              error={errors?.password2?.message || ''}
            />

            <InputForm
              className=""
              label="password2"
              type="password"
              placeholder="Confirmar contraseña*"
              error={errors?.password2?.message || ''}
            />

            <InputForm
              className=""
              label="phone"
              type="text"
              placeholder="Teléfono*"
              error={errors?.phone?.message || ''}
            />

            <div className="relative">
              <SubmitForm text="Crear cuenta" isLoading={isSubmitting} />

              <p className="text-my-red-error text-2xl text-center w-full tracking-wide pt-4 sm:absolute sm:top-[110%] sm:left-[0] sm:text-left xl:text-base">
                <i>
                  {errors?.firstname?.message ||
                    errors?.lastname?.message ||
                    errors?.dni?.message ||
                    errors?.email?.message ||
                    errors?.password?.message ||
                    errors?.password2?.message ||
                    errors?.phone?.message ||
                    registerError}
                </i>
              </p>
            </div>


          </div>
        </form>
      </FormProvider>
    </section>
  );
}

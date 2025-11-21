import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { userRegisterSchema } from "@/services/zodSchemas";

import ConectaSeinfraIcon from "@/assets/ConectaSeinfra.svg";
import LogoPrefeitura from "@/assets/LogoPrefeitura.svg";
import pinkLine from "@/assets/pinkLine.svg";
import yellowLine from "@/assets/yellowLine.svg";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import PasswordInput from "@/components/ui/password-input";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";

function PasswordRegisterPage() {
  const form = useForm<z.infer<typeof userRegisterSchema>>({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(userRegisterSchema),
  });

  function onSubmit() {
    console.log("logado");
  }

  return (
    <div className="relative flex min-h-screen h-auto font-semibold flex-col overflow-hidden">
      <img
        src={pinkLine}
        alt="Linha Rosa Background"
        className="absolute z-[-10] left-0 -top-10"
      />
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-8 flex-col justify-center items-center"
      >
        <div className="text-center mt-20">
          <h1 className="text-5xl text-seinfra-blue-light-700 mb-4 px-4">
            Criar conta
          </h1>
          <p className="text-seinfra-blue-light-500 px-4">
            Preencha as informações obrigatórias para criar a sua conta
          </p>
        </div>
        <FieldGroup className="flex felx-col gap-8">
          <Controller
            control={form.control}
            name="password"
            render={({ field, fieldState }) => (
              <Field orientation={"vertical"} data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name} className="max-w-[600px]">
                  Senha
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type="password"
                  className="max-w-[600px]"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            control={form.control}
            name="confirmPassword"
            render={({ field, fieldState }) => (
              <Field orientation={"vertical"} data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name} className="max-w-[600px]">
                  Confirmar Senha
                </FieldLabel>
                <PasswordInput
                  {...field}
                  id={field.name}
                  className="max-w-[600px]"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
                <Button className="px-4 py-3 mt-14 rounded-3xl max-w-[600px]">
                  Continuar
                </Button>
              </Field>
            )}
          />
        </FieldGroup>

        <footer className="flex mt-4 text-center justify-center flex-col gap-8 items-center">
          <div className="flex items-center justify-center mt-[5%] mb-[5%] gap-y-12 gap-x-24 sm:flex-row flex-col">
            <img src={ConectaSeinfraIcon} alt="Logo do Conecta Seinfra" />
            <img src={LogoPrefeitura} alt="LogoPrefeitura de Nova Russas" />
          </div>
        </footer>
        <img
          src={yellowLine}
          alt="Yellow Line"
          className="absolute right-0 bottom-0"
        />
      </form>
    </div>
  );
}

export default PasswordRegisterPage;

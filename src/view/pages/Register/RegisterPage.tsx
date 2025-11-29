import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { registerSchema } from "@/services/zodSchemas";
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
import { Input } from "@/components/ui/input";
import PasswordInput from "@/components/password-input";

function RegisterPage() {
  const [step, setStep] = useState(0);

  const form = useForm<z.infer<typeof registerSchema>>({
    defaultValues: {
      cpf: "",
      name: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(registerSchema),
  });

  function onSubmit(data: z.infer<typeof registerSchema>) {
    if (step < 1) {
      console.log(step);
      setStep(step + 1);
    } else {
      console.log(data);
    }
  }

  return (
    <div className="relative flex min-h-screen h-auto font-semibold flex-col overflow-hidden">
      <img
        src={pinkLine}
        alt="Linha Rosa Background"
        className="absolute -z-10 left-0 -top-10"
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
        {/*primeiro passo*/}
        {step === 0 && (
          <FieldGroup className="flex felx-col gap-8">
            <Controller
              control={form.control}
              name="name"
              render={({ field, fieldState }) => (
                <Field
                  orientation={"vertical"}
                  data-invalid={fieldState.invalid}
                >
                  <FieldLabel htmlFor={field.name} className="max-w-[600px]">
                    Nome
                  </FieldLabel>
                  <Input {...field} id={field.name} />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              control={form.control}
              name="phone"
              render={({ field, fieldState }) => (
                <Field
                  orientation={"vertical"}
                  data-invalid={fieldState.invalid}
                >
                  <FieldLabel htmlFor={field.name} className="max-w-[600px]">
                    Telefone
                  </FieldLabel>
                  <Input {...field} id={field.name} className="max-w-[600px]" />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              control={form.control}
              name="cpf"
              render={({ field, fieldState }) => (
                <Field
                  orientation={"vertical"}
                  data-invalid={fieldState.invalid}
                >
                  <FieldLabel htmlFor={field.name} className="max-w-[600px]">
                    CPF
                  </FieldLabel>
                  <Input {...field} id={field.name} className="max-w-[600px]" />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                  <Button
                    type="submit"
                    className="px-4 py-3 mt-14 rounded-3xl max-w-[600px]"
                    onClick={async () => {
                      const ok = await form.trigger(["name", "phone", "cpf"]);
                      if (ok) setStep(1);
                    }}
                  >
                    Continuar
                  </Button>
                </Field>
              )}
            />
          </FieldGroup>
        )}
        {/* segundo passo */}
        {step === 1 && (
          <FieldGroup className="flex felx-col gap-8">
            <Controller
              control={form.control}
              name="password"
              render={({ field, fieldState }) => (
                <Field
                  orientation={"vertical"}
                  data-invalid={fieldState.invalid}
                >
                  <FieldLabel htmlFor={field.name} className="max-w-[600px]">
                    Senha
                  </FieldLabel>
                  <Input {...field} id={field.name} className="max-w-[600px]" />
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
                <Field
                  orientation={"vertical"}
                  data-invalid={fieldState.invalid}
                >
                  <FieldLabel htmlFor={field.name} className="max-w-[600px]">
                    Confirmar senha
                  </FieldLabel>
                  <PasswordInput
                    {...field}
                    id={field.name}
                    className="max-w-[600px]"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                  <Button
                    type="submit"
                    className="px-4 py-3 mt-14 rounded-3xl max-w-[600px]"
                    onClick={async () => {
                      const ok = await form.trigger([
                        "password",
                        "confirmPassword",
                      ]);
                      if (ok) form.handleSubmit(onSubmit)();
                    }}
                  >
                    Continuar
                  </Button>
                </Field>
              )}
            />
          </FieldGroup>
        )}

        <footer className="flex mt-4 text-center justify-center flex-col gap-8 items-center">
          <div className="flex items-center justify-center mt-12 mb-12 gap-y-12 gap-x-24 sm:flex-row flex-col">
            <img src={ConectaSeinfraIcon} alt="Logo do Conecta Seinfra" />
            <img src={LogoPrefeitura} alt="Logo Prefeitura de Nova Russas" />
          </div>
        </footer>
        <img
          src={yellowLine}
          alt="Yellow Line"
          className="absolute -right-2 sm:right-0 -bottom-10"
        />
      </form>
    </div>
  );
}

export default RegisterPage;

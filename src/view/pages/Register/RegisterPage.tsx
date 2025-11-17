import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import ConectaSeinfraIcon from "./../../../assets/IconsNewSvgs/ConectaSeinfra.svg";
import LogoPrefeitura from "./../../../assets/IconsNewSvgs/LogoPrefeitura.svg";
import pinkLine from "./../../../assets/IconsNewSvgs/pinkLine.svg";
import yellowLine from "./../../../assets/IconsNewSvgs/yellowLine.svg";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import InputPassword from "@/components/shadcn-studio/input/input-26.tsx";
import { loginSchema } from "./../../../lib/zod.ts";

function LoginPage() {
  const form = useForm<z.infer<typeof loginSchema>>({
    defaultValues: {
      password: "",
      CPF: "",
    },
    resolver: zodResolver(loginSchema),
  });

  function onSubmit() {
    console.log("patapim");
  }

  return (
    <div className="flex min-h-screen h-auto flex-col overflow-x-hidden ">
      <img
        src={pinkLine}
        alt="Linha Rosa Background"
        className="absolute left-0 top-0"
      />
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-8 flex-col justify-center items-center w-screen h-auto min-h-screen"
      >
        <div className="text-center mt-[5%]">
          <h1 className="text-5xl font-semibold font-manrope text-seinfra-blue-light-700 mb-4">
            Criar conta
          </h1>

          <p className="text-seinfra-blue-light-500">
            Preencha as informações obrigatórias para criar sua conta
          </p>
        </div>
        <FieldGroup>
          <Controller
            control={form.control}
            name="CPF"
            render={({ field, fieldState }) => (
              <Field orientation={"vertical"} data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor={field.name}
                  className="text-center w-full justify-self-start max-w-[600px]"
                >
                  CPF
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
            name="password"
            render={({ field, fieldState }) => (
              <Field orientation={"vertical"} data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor={field.name}
                  className="text-center w-full justify-self-start max-w-[600px]"
                >
                  Senha
                </FieldLabel>
                <InputPassword />
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
        <footer className="">
          <div className="flex items-center justify-center mt-[5%] mb-[5%] gap-y-12 gap-x-24 sm:flex-row">
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

export default LoginPage;

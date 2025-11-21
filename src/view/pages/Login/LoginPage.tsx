import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import ConectaSeinfraIcon from "./../../../assets/ConectaSeinfra.svg";
import LogoPrefeitura from "./../../../assets/LogoPrefeitura.svg";
import pinkLine from "./../../../assets/pinkLine.svg";
import yellowLine from "./../../../assets/yellowLine.svg";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { userLoginSchema } from "@/services/zodSchemas";

function LoginPage() {
  console.log(yellowLine);

  const form = useForm<z.infer<typeof userLoginSchema>>({
    resolver: zodResolver(userLoginSchema),
  });

  function onSubmit(data: z.infer<typeof userLoginSchema>) {
    console.log(data);
  }

  return (
    <div className="flex min-h-screen h-auto flex-col overflow-x-hidden ">
      <img
        src={pinkLine}
        alt="Linha Rosa Background"
        className="absolute left-0 top-0 z-[-10]"
      />
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-8 flex-col justify-center items-center w-screen h-auto min-h-screen"
      >
        <div className="text-center mt-[5%]">
          <h1 className="text-5xl font-semibold font-manrope text-seinfra-blue-light-700 mb-4">
            Login
          </h1>

          <p className="text-seinfra-blue-light-500">
            Informe seu CPF e senha para entrar na sua conta
          </p>
        </div>
        <FieldGroup>
          <Controller
            control={form.control}
            name="cpf"
            render={({ field, fieldState }) => (
              <Field orientation={"vertical"} data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor={field.name}
                  className="text-center w-full justify-self-start max-w-[600px] font-semibold text-seinfra-blue-light-400"
                >
                  CPF
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
            name="password"
            render={({ field, fieldState }) => (
              <Field orientation={"vertical"} data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor={field.name}
                  className="text-center w-full justify-self-start font-semibold max-w-[600px] text-seinfra-blue-light-400"
                >
                  Senha
                </FieldLabel>
                <Input type="password" className="max-w-[600px]" />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
                <Button className="px-4 py-3 mt-14 rounded-3xl max-w-[600px]">
                  Entrar
                </Button>
              </Field>
            )}
          />
        </FieldGroup>
        <footer className="">
          <h1 className="text-seinfra-blue-light-500 text-center font-semibold">
            Não tem uma conta? <br />
            <Link to="/register" className="text-seinfra-yellow-300 underline">
              Criar conta
            </Link>
          </h1>
          <div className="flex items-center justify-center mt-[5%] mb-[5%] gap-y-12 gap-x-24 sm:flex-row">
            <img src={ConectaSeinfraIcon} alt="Logo do Conecta Seinfra" />
            <img src={LogoPrefeitura} alt="LogoPrefeitura de Nova Russas" />
          </div>
        </footer>
        <img
          src={yellowLine}
          alt="Yellow Line"
          className="absolute right-0 -bottom-10 z-[-10]"
        />
      </form>
    </div>
  );
}

export default LoginPage;

import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@tanstack/react-router";
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
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof userLoginSchema>>({
    defaultValues: {
      password: "",
      cpf: "",
    },
    resolver: zodResolver(userLoginSchema),
  });

  async function onSubmit(data: z.infer<typeof userLoginSchema>) {
    try {
      console.log(data);
      navigate({ to: "/", replace: true });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="relative flex min-h-dvh h-auto flex-col">
      <img
        src={pinkLine}
        alt="Linha Rosa Background"
        className="absolute left-0 -top-20 sm:-top-10"
      />
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-8 flex-col justify-center items-center"
      >
        <div className="text-center mt-14">
          <h1 className="text-5xl font-semibold font-manrope text-seinfra-blue-light-700 mb-4">
            Login
          </h1>

          <p className="text-seinfra-blue-light-500 mx-4">
            Informe seu CPF e senha para entrar na sua conta
          </p>
        </div>
        <FieldGroup>
          <Controller
            control={form.control}
            name="cpf"
            render={({ field, fieldState }) => (
              <Field orientation={"seinfra"} data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>CPF</FieldLabel>
                <Input {...field} id={field.name} autoComplete="username" />
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
              <Field orientation={"seinfra"} data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Senha</FieldLabel>
                <Input
                  {...field}
                  type="password"
                  id={field.name}
                  autoComplete="current-password"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
                <Button className="mt-14">Entrar</Button>
              </Field>
            )}
          />
        </FieldGroup>
        <footer className="flex flex-col gap-4">
          <div className="flex flex-col text-center font-semibold">
            <h1 className="text-seinfra-blue-light-500">Não tem uma conta?</h1>
            <Link to="/register" className="text-seinfra-yellow-300 underline">
              Criar conta
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center mt-14 mb-14 gap-y-12 gap-x-24 sm:flex-row">
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

export default LoginPage;

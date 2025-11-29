import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import ConectaSeinfraIcon from "./../../../assets/ConectaSeinfra.svg";
import LogoPrefeitura from "./../../../assets/LogoPrefeitura.svg";
import pinkLine from "./../../../assets/pinkLine.svg";
import yellowLine from "./../../../assets/yellowLine.svg";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import { ChevronUp, ChevronDown } from "lucide-react";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { orderRegisterSchema } from "@/services/zodSchemas";
import { useState } from "react";

function LoginPage() {
  const [open, setOpen] = useState(false);
  const categories = [
    "Iluminação",
    "Poda de árvore",
    "Buraco na pista",
    "Asfaltar",
    "Outro",
  ];

  const form = useForm<z.infer<typeof orderRegisterSchema>>({
    defaultValues: {
      neighborhood: "",
      street: "",
      reference: "",
      desc: "",
      category: undefined,
    },
    resolver: zodResolver(orderRegisterSchema),
  });

  function onSubmit(data: z.infer<typeof orderRegisterSchema>) {
    console.log(data);
  }

  return (
    <div className="flex min-h-dvh h-auto flex-col overflow-x-hidden ">
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
          <h1 className="text-5xl font-semibold font-manrope text-seinfra-blue-light-400 mb-4">
            Registrar Ordem
          </h1>
        </div>
        <FieldGroup>
          <div className="flex justify-center">
            <Controller
              control={form.control}
              name="category"
              render={({ field, fieldState }) => (
                <Field
                  orientation={"vertical"}
                  data-invalid={fieldState.invalid}
                >
                  <DropdownMenu onOpenChange={setOpen} {...field}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant={"outline"}
                        className="w-[90vw] max-w-[600px] p-4 border-2 border-seinfra-blue-light-400 rounded-2xl bg-white text-seinfra-blue-light-400 font-bold text-left justify-start hover:bg-transparent focus:bg-transparent hover:text-seinfra-blue-light-400 focus:text-seinfra-blue-light-400"
                      >
                        {field.value || "Categoria"}
                        <DropdownMenuShortcut>
                          <DropdownMenuShortcut>
                            {open ? (
                              <ChevronUp className="text-seinfra-blue-light-400" />
                            ) : (
                              <ChevronDown className="text-seinfra-blue-light-400" />
                            )}
                          </DropdownMenuShortcut>
                        </DropdownMenuShortcut>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      className="w-[90vw] max-w-[600px] border-2 border-seinfra-blue-light-200 rounded-2xl"
                    >
                      <DropdownMenuGroup>
                        {categories.map((item) => (
                          <DropdownMenuItem
                            key={item}
                            onClick={() => field.onChange(item)}
                            className="text-2xs font-bold text-seinfra-blue-light-400 cursor-pointer hover:bg-white focus:bg-white"
                          >
                            {item}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>
          <Controller
            control={form.control}
            name="neighborhood"
            render={({ field, fieldState }) => (
              <Field orientation={"vertical"} data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor={field.name}
                  className="max-w-[600px] font-semibold"
                >
                  Bairro
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
            name="street"
            render={({ field, fieldState }) => (
              <Field orientation={"vertical"} data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor={field.name}
                  className="max-w-[600px] font-semibold"
                >
                  Rua
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
            name="reference"
            render={({ field, fieldState }) => (
              <Field orientation={"vertical"} data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor={field.name}
                  className="max-w-[600px] font-semibold"
                >
                  Ponto de referência
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  autoComplete="current-password"
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
            name="desc"
            render={({ field, fieldState }) => (
              <Field orientation={"vertical"} data-invalid={fieldState.invalid}>
                <div className="relative max-w-[600px] w-full">
                  <FieldLabel
                    htmlFor={field.name}
                    className="max-w-[600px] font-semibold"
                  >
                    Descreva o ocorrido
                  </FieldLabel>
                  <Textarea
                    {...field}
                    className={cn(
                      "max-w-[600px] border-seinfra-blue-light-400 w-full min-w-0 rounded-3xl pb-38",
                      "resize-none"
                    )}
                  />
                  <button
                    type="button"
                    className="absolute left-10 -bottom-2 -translate-6 bg-seinfra-blue-light-400 text-white cursor-pointer rounded-2xl p-2"
                  >
                    <Camera></Camera>
                  </button>
                </div>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}

                <Button
                  type="submit"
                  className="px-4 py-3 mt-12 rounded-3xl max-w-[600px]"
                >
                  Entrar
                </Button>
              </Field>
            )}
          />
        </FieldGroup>
        <footer>
          <div className="flex items-center justify-center mt-[5%] mb-[5%] gap-y-12 gap-x-24 sm:flex-row">
            <img src={ConectaSeinfraIcon} alt="Logo do Conecta Seinfra" />
            <img src={LogoPrefeitura} alt="LogoPrefeitura de Nova Russas" />
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

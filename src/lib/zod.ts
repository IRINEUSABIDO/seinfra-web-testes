import z from "zod";

export const loginSchema = z.object({
  password: z
    .string()
    .min(8, { message: "A senha deve conter no mínimo 8 caracteres" }),
  cpf: z
    .string()
    .min(14, { message: "CPF Invalido" })
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: "CPF inválido" }),
});
export const registerSchema = z.object({
  name: z.string(),
  phone: z
    .string()
    .min(13, { message: "Numero invalido" })
    .regex(/^\d{4}\-\d{4}$/, { message: "Telefone invalidado" }),

  cpf: z
    .string()
    .min(14, { message: "CPF Invalido" })
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: "CPF inválido" }),
});

import z from "zod";

export const loginSchema = z.object({
  password: z.string().min(8, { message: "A senha deve conter no mínimo 8 caracteres" }),
  CPF: z.string().min(14, { message: "CPF Invalido" }),
})


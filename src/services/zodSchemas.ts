import z from "zod";

export const userloginSchema = z.object({
  password: z
    .string()
    .min(8, { message: "A senha deve conter no mínimo 8 caracteres" }),
  cpf: z
    .string()
    .min(14, { message: "CPF Invalido" })
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: "CPF inválido" }),
});
export const userRegisterSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "A senha deve conter no mínimo 8 caracteres" })
      .optional(),
    confirmPassword: z
      .string()
      .min(8, { message: "A senha deve conter no mínimo 8 caracteres" })
      .optional(),
    name: z.string(),
    phone: z
      .string()
      .min(9, { message: "Numero invalido" })
      .regex(/^\d{4}\-\d{4}$/, { message: "Numero invalido" }),

    cpf: z.string().min(14, { message: "CPF Invalido" }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "As senhas devem ser iguais",
        path: ["confirmPassword"],
      });
    }
  });

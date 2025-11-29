import z from "zod";

export const userLoginSchema = z.object({
  password: z
    .string()
    .min(8, { message: "A senha deve conter no mínimo 8 caracteres" }),
  cpf: z
    .string()
    .min(14, { message: "CPF Invalido" })
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: "CPF inválido" }),
});
export const registerSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "A senha deve conter no mínimo 8 caracteres" }),
    confirmPassword: z.string(),
    name: z.string().min(1, { message: "O campo deve ser preenchido" }),
    phone: z.string().regex(/^\d{4}\-\d{4}$/, { message: "Numero invalido" }),
    cpf: z
      .string()
      .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: "CPF inválido" }),
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

export const orderRegisterSchema = z.object({
  neighborhood: z.string().min(1, { message: "O campo deve ser preenchido" }),
  street: z.string().min(1, { message: "O campo deve ser preenchido" }),
  reference: z.string().min(1, { message: "O campo deve ser preenchido" }),
  desc: z.string().min(1, { message: "O campo deve ser preenchido" }),
  category: z.enum(
    ["Iluminação", "Poda de árvore", "Buraco na pista", "Asfaltar", "Outros",],
    {
      message:"Selecione uma categoria",
    }
  ),
});

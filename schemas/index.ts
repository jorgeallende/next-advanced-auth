import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string({
      required_error: "Email obrigatório",
    })
    .email({
      message: "Email inválido",
    }),
  password: z.string().min(1, {
    message: "Insira a senha",
  }),
});

export const RegisterSchema = z.object({
  email: z
    .string({
      required_error: "Email obrigatório",
    })
    .email({
      message: "Email inválido",
    }),
  password: z.string().min(6, {
    message: "Minimo de 6 caracteres",
  }),
  name: z.string().min(1, {
    message: "Insira o nome",
  }),
});

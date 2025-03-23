import {z} from "zod"

export const loginSchema = z.object({
    
    name: z
      .string()
      .min(1, {message: "Campo requerido"})
      .max(60, {message:"No debe contener más de 60 caractéres"}),
    lastname: z
      .string()
      .min(1, {message: "Campo requerido"})
      .max(60, {message:"No debe contener más de 60 caractéres"}),
    email: z
    .string()
    .min(1, {message: "Campo requerido"})
    .email({message:"Por favor ingrese un correo electrónico válido"}),
    phone: z
    .string()
    .min(1, {message: "Campo requerido"})
    .min(10, {message: "Por favor ingrese un número de teléfono válido"})
    .max(10, {message: "Por favor ingrese un número de teléfono válido"})
    .refine((phone) => /[0-9]/.test(phone),
        { message: "Por favor ingrese un número de teléfono válido" })
    ,
    password: z
    .string()
    .min(1, {message: "Campo requerido"})
    .min(8, {message: "La constraseña debe ser de al menos 8 caractéres"})
    .max(20, {message:"La contraseña no debe exceder los 20 catartéres"})
    .refine((password) => /[A-Z]/.test(password),
        {message: "La contraseña debe contener al menos un caractér en mayúscula"})
    .refine((password) => /[a-z]/.test(password),
        {message: "La contraseña debe contener al menos un caractér en minúscula"})
    .refine((password) => /[0-9]/.test(password),
        { message: "La contraseña debe contener al menos un número" })
    .refine((password) => /[!@#$%^&*]/.test(password),
        {message: "La contraseña debe contener al menos un caractér especial"}),
    confirmPassword: z
    .string()
    .min(1, {message: "Por favor confirme su contraseña"}),
    terms: z
    .boolean().refine((val) => val, {
        message: "Por favor leer y aceptar los términos y condiciones"
    }),
    suscribe: z
    .boolean().optional()
})
.refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas deben coincidir",
    path: ["confirmPassword"],
  })

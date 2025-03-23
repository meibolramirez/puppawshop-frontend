"use client"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { loginSchema } from "../utils/zodSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Input } from "@/components/ui/Input";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
import { Button } from "@/components/ui/button"
import { Eye, EyeOff } from "lucide-react"

const login = () => {

    const form = useForm<z.infer<typeof loginSchema>>({
            resolver: zodResolver(loginSchema),
            defaultValues: {
                name: '',
                lastname: '',
                email: '',
                phone: '',
                password: '',
                confirmPassword: '',
            },       
        })

    const [showPassword, setShowPassword] = useState(false)
        
    function onSubmit(values: z.infer<typeof loginSchema>){
        console.log(values)
    }

  return (
    <div className="flex-grow content-center border-t-8 border-t-[#6C584C]">
        <div className="min-h-md flex justify-center">
            
            <div className="relative flex flex-col gap-5 text-[#6C584C] shadow-2xl shadow-[#6C584C] rounded-2xl m-10 px-5 py-10 text-center w-full max-w-xl">

                <h1 className="font-semibold text-xl">¿Ya tienes cuenta?</h1>
                
                <p>Ingresa tus datos para iniciar sesión</p>    
        
                <Form {...form}>
                    <form className="text-sm w-full px-10 text-start" onSubmit={form.handleSubmit(onSubmit)}>
                        
                        <FormField control={form.control} name="email" render={({field})=> (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Introduzca su correo electrónico"{...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />

                    <FormField control={form.control} name="password" render={({field})=> (
                        <FormItem>
                            <FormLabel>Contraseña</FormLabel>
                            <FormControl>
                                <div className="relative w-full">
                                <Input type={showPassword ? "text" : "password"} placeholder="Introduzca su contraseña"{...field} />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2"
                                        onClick={() => setShowPassword((prev) => !prev)}
                                        >
                                        {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                                    </Button>
                                </div>
                            </FormControl>
                            
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                        <div className="flex justify-end mr-3 mt-10 font-semibold text-[#6C584C] md:text-lg">
                            <button type="submit" className="p-5 bg-[#DDE5B6] hover:bg-[#ADC178] rounded-xl  px-3 py-2">
                                Iniciar sesión
                            </button>
                        </div>

                    </form>                       
                                            
                </Form>

            <div className="m-3">
                <p className="text-sm">¿Aún no tienes una cuenta?
                <Link href="/signup" className="text-xs underline ml-2">Registrate aquí</Link>
                </p>
            </div>
            
            </div>
        </div>
    </div>
  )
}

export default login
"use client"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { loginSchema } from "../utils/zodSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Input } from "@/components/ui/Input"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff } from "lucide-react"

const signup = () => {

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            name: '',
            lastname: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
            terms: false,
            suscribe: true
        },       
    })

    const [showPassword, setShowPassword] = useState(false)

    const [showCPassword, setShowCPassword] = useState(false)
    
    function onSubmit(values: z.infer<typeof loginSchema>){
        console.log(values)
    }
     
    return (
        <div className="min-h-md flex flex-grow justify-center border-t-8 border-t-[#6C584C]">
            
            <div className="flex flex-col gap-5 text-[#6C584C] shadow-2xl shadow-[#6C584C] rounded-2xl px-5 py-10 m-10 text-center w-full max-w-xl">

                <h1 className="font-semibold text-xl">¿Aún no te has registrado?</h1>
                
                <p>Registrate ahora y realiza tus compras más fácil y rápido.</p>

                <Form {...form}>
                    <form className="text-sm w-full px-10 text-start" onSubmit={form.handleSubmit(onSubmit)}>
                        
                        <FormField control={form.control} name="name" render={({field})=> (
                            <FormItem>
                                <FormLabel>Nombres</FormLabel>
                                <FormControl>
                                    <Input placeholder="Introduzca sus nombres"{...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />

                        <FormField control={form.control} name="lastname" render={({field})=> (
                            <FormItem>
                                <FormLabel>Apellidos</FormLabel>
                                <FormControl>
                                    <Input placeholder="Introduzca sus apellidos"{...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />

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

                        <FormField control={form.control} name="phone" render={({field})=> (
                            <FormItem>
                                <FormLabel>Teléfono</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="Introduzca su número de teléfono"{...field} />
                                </FormControl>
                                <FormMessage className="" />
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

                        <FormField control={form.control} name="confirmPassword" render={({field})=> (
                            <FormItem>
                                <FormLabel>Confirme su contraseña</FormLabel>
                                <FormControl>
                                    <div className="relative w-full">
                                        <Input type={showCPassword ? "text" : "password"} placeholder="Introduzca nueva vez su contraseña"{...field} />
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2"
                                                onClick={() => setShowCPassword((prev) => !prev)}
                                                >
                                                {showCPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                                            </Button>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />

                        <FormField control={form.control} name="terms" render={({field})=> (
                            <FormItem className="flex flex-row mt-5">
                                <FormControl>
                                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                </FormControl>
                                <p className="text-xs">Acepto los términos y condiciones</p>
                                <FormMessage />
                            </FormItem>
                        )}
                        />

                        <FormField control={form.control} name="suscribe" render={({field})=> (
                            <FormItem className="flex flex-row mt-5">
                                <FormControl>
                                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                </FormControl>
                                <p className="text-xs">Deseo suscribirme al newwsletter</p>
                                <FormMessage />
                            </FormItem>
                        )}
                        />

                        <div className="flex justify-end mr-3 mt-10 font-semibold text-[#6C584C] md:text-lg">
                            <button type="submit" className="p-5 bg-[#DDE5B6] hover:bg-[#ADC178] rounded-xl px-3 py-2">
                                Registrarse
                            </button>
                        </div>
                        

                    </form>                       
                    
                </Form>

                

                <div className="m-3">
                    <p className="text-sm">¿Ya tienes una cuenta?
                    <Link href="/login" className="text-xs underline ml-2">Inicia sesión aquí</Link>
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default signup
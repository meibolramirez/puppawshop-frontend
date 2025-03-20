const signup = () => {
  return (
    <div className="min-h-md flex justify-center m-5">
        <div className="relative flex flex-col gap-5 text-[#6C584C] shadow-xl px-5 py-10 m-10 text-center w-full max-w-xl">

            <h1 className="font-semibold text-xl">¿Aún no te has registrado?</h1>
            
            <p>Registrate ahora y haz tus compras más fácil y rápido.</p>    
    
            <form className="text-sm w-full px-10">
                    
                <div className="p-2">
                    <input name="name" type="text" className="w-full px-3 py-3 rounded border-2 border-[#6C584C]" placeholder="Nombres" />
                </div>
                
                <div className="p-2">
                    <input name="lastname" type="text" className="w-full px-3 py-3 rounded border-2 border-[#6C584C]" placeholder="Apellidos" />
                </div>
                
                <div className="p-2">
                    <input name="email" type="email" className="w-full px-3 py-3 rounded border-2 border-[#6C584C]" placeholder="Correo electrónico" />
                </div>
                
                <div className="p-2">
                    <input name="phone" type="tel" className="w-full px-3 py-3 rounded border-2 border-[#6C584C]" placeholder="Teléfono" />
                </div>
                
                <div className="p-2">
                    <input name="password" type="password" className="w-full px-3 py-3 rounded border-2 border-[#6C584C]" placeholder="Contraseña" />
                </div>
                
                <div className="p-2">
                    <input name="cpassword" type="password" className="w-full px-3 py-3 rounded border-2 border-[#6C584C]" placeholder="Confirma contraseña" />
                </div>

                <div className="flex p-1 text-xs">
                    <input name="suscribecheck" type="checkbox" className="border-[#6C584C]" />
                    <p className="ml-2">Acepto los términos y condiciones</p>
                </div>

                <div className="flex p-1 text-xs">
                    <input name="suscribecheck" type="checkbox" className="border-[#6C584C]" />
                    <p className="ml-2">Deseo suscribirme al newsletter</p>
                </div>
            </form>

            <div className="flex justify-end p-2 mr-10">
                <a href="" className="bg-[#ADC178] text-[#6C584C] rounded-xl md:text-l px-3 py-2 font-semibold">
                    <h2>¡Registrarme!</h2>
                </a>
            </div>
        </div>
    </div>
  )
}

export default signup
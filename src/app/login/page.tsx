const login = () => {
  return (
    <div className="min-h-md flex justify-center m-10">
        <div className="relative flex flex-col gap-5 text-[#6C584C] shadow-xl px-5 py-10 text-center w-full max-w-xl">

            <h1 className="font-semibold text-xl">¿Ya tienes cuenta?</h1>
            
            <p>Ingresa tus datos para iniciar sesión</p>    
    
            <form className="text-sm w-full px-10">                
                <div className="p-2">
                    <input name="email" type="email" className="w-full px-3 py-3 rounded border-2 border-[#6C584C] bg-white" placeholder="Correo electrónico" />
                </div>
                
                <div className="p-2">
                    <input name="password" type="password" className="w-full px-3 py-3 rounded border-2 border-[#6C584C] bg-white" placeholder="Contraseña" />
                </div>
            </form>

            <div className="flex justify-end p-2 mr-10">
                <a href="" className="bg-[#ADC178] text-[#6C584C] rounded-xl md:text-l px-5 py-2 font-semibold">
                    <h2>Inicia Sesión</h2>
                </a>
            </div>
        </div>
    </div>
  )
}

export default login
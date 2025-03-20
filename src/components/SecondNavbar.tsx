import Link from "next/link"

const SecondNavbar = () => {
  return (
    <div className="relative mx-auto max-w-auto w-full h-12 px-10 flex items-center justify-between bg-[#6C584C]">
        
        <div className="flex flex-row items-center">
            <div className="group">
                <Link href="#" className="flex place-items-center font-semibold uppercase text-[#F0EAD2]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
                    <p className="hidden sm:block ml-2">Categorias</p>         
                </Link>

                <div className="z-10 group-hover:block dropdown-menu absolute hidden h-auto w-auto">
                    <ul className="bg-[#F0EAD2] text-[#6C584C] font-semibold mt-2.5 pt-1 shadow-lg opacity-95">
                        <li>
                            <Link href="#" className="py-3 px-5 block whitespace-no-wrap hover:bg-[#6C584C] hover:text-[#F0EAD2]">Accesorios
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-5 inline-block">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </Link>
                            <Link href="#" className="py-3 px-5 block whitespace-no-wrap hover:bg-[#6C584C] hover:text-[#F0EAD2]">Moda
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-5 inline-block">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </Link>
                            <Link href="#" className="py-3 px-5 block whitespace-no-wrap hover:bg-[#6C584C] hover:text-[#F0EAD2]">Higiene y cuidado
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-5 inline-block">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

        
        <nav className="flex flex-row gap-12">
            <Link href="#" className="font-semibold uppercase text-[#F0EAD2]">Productos</Link>
            <Link href="#" className="font-semibold uppercase text-[#F0EAD2]">Ofertas</Link>
        </nav>
    </div>
  )
}

export default SecondNavbar
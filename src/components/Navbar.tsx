"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const dropdownRef = useRef<HTMLDivElement | null>(null) 

  
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

    return (
  
    <div className="relative mx-auto max-w-auto h-[100px] w-full px-5 flex items-center justify-between">

    <div className="flex flex-row gap-2 items-center mr-5">
        <div className="bg-[#6C584C] flex justify-center w-12 h-12 md:w-16 md:h-16 lg:w-14 lg:h-14 p-2 rounded-full">
            <Link href="/" replace>
                <Image src="/images/logo-F0EAD2.png"  width={48} height={48} alt="logo" />
            </Link>
        </div>
        <div className="hidden lg:block">
            <h1 className="text-2xl font-semibold text-[#6C584C]">Pup Paw Shop</h1>
        </div>
    </div> 



    <form action="" className="w-full max-w-md">
        <div className="relative flex items-center text-[#A98467]">
            <input type="text" name="search" placeholder="Productos" className="w-full px-3 py-2 placeholder-[#A98467] placeholder:text-sm text-[#A98467] rounded-2xl border-none ring-2 ring-[#6C584C] focus:ring-2 focus:ring-[#6C584C] focus:outline-none" />
            <button type="submit" className="absolute right-0 top-0 mt-2 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                </svg>
            </button>                                  
        </div>                    
    </form>

    <nav className="flex flex-row gap-5 place-items-center ml-5">
        <div className="relative" ref={dropdownRef}>    
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center font-semibold text-[#6C584C] hover:text-[#A98467] cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>                                  
                <p className="hidden lg:block lg:text-sm xl:text-lg ml-1">Mi Cuenta</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </button>

            {isOpen && (
                <div className="z-10 absolute bg-white text-[#6C584C] font-semibold mt-2 p-2 shadow-lg w-40 rounded-lg">
                <ul>
                    <li>
                        <Link href="/signup" className="flex items-center whitespace-nowrap py-3 px-5 hover:text-[#A98467] mb-1" onClick={() => setIsOpen(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                </svg>                               
                                Registrate
                        </Link>
                        <Link href="/login" className="flex items-center whitespace-nowrap py-2 px-2 bg-[#DDE5B6]  hover:bg-[#ADC178] mx-1 my-1 rounded-xl" onClick={() => setIsOpen(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>                                  
                                Inicia Sesión
                        </Link>
                    </li>
                </ul>
            </div>
            )}                    
        </div>    
            
            <button className="flex place-items-center font-semibold bg-[#ADC178] text-[#6C584C] rounded-xl px-2 p-2 cursor-pointer group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                <p className="hidden lg:block lg:text-sm xl:text-lg ml-1">Mi Carrito</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>

                  <div className="invisible md:visible z-10 fixed top-0 right-0 w-1/2 xl:w-1/3 h-screen overflow-y-auto bg-[#F0EAD2] shadow-lg translate-x-full group-focus:-translate-x-0 transition-transform duration-300 ease-in-out p-6">
                    <div className="flex flex-row justify-between">
                        <h1 className="uppercase text-xl">Mi Carrito</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>                          
                    </div>
                  </div>  

            </button>

        </nav>

  </div> 
)
}

export default Navbar
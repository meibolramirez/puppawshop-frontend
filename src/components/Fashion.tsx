import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Fashion(){
  return (
    <div className="my-10 mx-15">
        <div className="flex flex-row justify-between">
            <h2 className="text-2xl font-semibold text-[#6C584C] uppercase">Moda</h2>
            <Link href="#" className="text-[#6C584C] text-lg">                     
                Ver más
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                  </svg>                      
            </Link>
        </div>
        <div className="grid grid-flow-row grid-col-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-5">
            <div className="shadow-lg">
                <Link href="#">
                    <Image src="/images/ropa-1.webp" width={1000} height={1000} alt="Gray dog sitting on grass with a black with white stripes sweater on" />
                </Link>
                <div className="p-5">
                    <h3><Link href="#" className="uppercase">Suéters</Link></h3>
                    <div className="flex flex-row gap-1">
                        <div className="bg-blue-600 h-5 w-5 rounded-full shadow-md mr-2 mt-3"></div>
                        <div className="bg-red-500 h-5 w-5 rounded-full shadow-md mr-2 mt-3"></div>
                        <div className="bg-yellow-400 h-5 w-5 rounded-full shadow-md mr-2 mt-3"></div>
                        <div className="bg-green-600 h-5 w-5 rounded-full shadow-md mr-2 mt-3"></div>
                        <div className="bg-purple-600 h-5 w-5 rounded-full shadow-md mr-2 mt-3"></div>
                        <div className="bg-pink-600 h-5 w-5 rounded-full shadow-md mr-2 mt-3"></div>
                        <div className="bg-black h-5 w-5 rounded-full shadow-md mr-2 mt-3"></div>
                    </div>

                    <div className="relative flex flex-row gap-2 text-xs">
                        <div className="border-2 border-[#DDE5B6] text-[#ADC178] shadow-md rounded-md mt-3 px-1.5 py-1.5">XXL</div>
                        <div className="border-2 border-[#DDE5B6] text-[#ADC178] shadow-md rounded-md mt-3 px-1.5 py-1.5">XL</div>
                        <div className="border-2 border-[#DDE5B6] text-[#ADC178] shadow-md rounded-md mt-3 px-1.5 py-1.5">L</div>
                        <div className="border-2 border-[#DDE5B6] text-[#ADC178] shadow-md rounded-md mt-3 px-1.5 py-1.5">M</div>
                        <div className="border-2 border-[#DDE5B6] text-[#ADC178] shadow-md rounded-md mt-3 px-1.5 py-1.5">S</div>
                        <div className="border-2 border-[#DDE5B6] text-[#ADC178] shadow-md rounded-md mt-3 px-1.5 py-1.5">XS</div>
                    </div>

                    <div className="flex flex-row justify-between mt-5">
                        <Link href="#" className="bg-[#DDE5B6] text-[#6C584C] rounded-xl self-start px-2 py-2 p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                              </svg>                                      
                        </Link>
                        <Link href="#" className="text-[#6C584C] text-sm underline underline-offset-2 font-semibold uppercase rounded-xl self-start px-2 py-2 p-2">
                        Ver detalles
                        </Link>
                    </div>
                </div>
            </div>    

            <div className="shadow-lg">
                <Link href="#">
                    <Image src="/images/ropa-1.webp" width={1000} height={1000} alt="Gray dog sitting on grass with a black with white stripes sweater on" />
                </Link>
                <div className="p-5">
                    <h3><Link href="#" className="uppercase">Suéters</Link></h3>
                    <div className="flex flex-row gap-1">
                        <div className="bg-blue-600 h-5 w-5 rounded-full shadow-md mr-2 mt-3"></div>
                        <div className="bg-red-500 h-5 w-5 rounded-full shadow-md mr-2 mt-3"></div>
                        <div className="bg-yellow-400 h-5 w-5 rounded-full shadow-md mr-2 mt-3"></div>
                        <div className="bg-green-600 h-5 w-5 rounded-full shadow-md mr-2 mt-3"></div>
                        <div className="bg-purple-600 h-5 w-5 rounded-full shadow-md mr-2 mt-3"></div>
                        <div className="bg-pink-600 h-5 w-5 rounded-full shadow-md mr-2 mt-3"></div>
                        <div className="bg-black h-5 w-5 rounded-full shadow-md mr-2 mt-3"></div>
                    </div>

                    <div className="relative flex flex-row gap-2 text-xs">
                        <div className="border-2 border-[#DDE5B6] text-[#ADC178] shadow-md rounded-md mt-3 px-1.5 py-1.5">XXL</div>
                        <div className="border-2 border-[#DDE5B6] text-[#ADC178] shadow-md rounded-md mt-3 px-1.5 py-1.5">XL</div>
                        <div className="border-2 border-[#DDE5B6] text-[#ADC178] shadow-md rounded-md mt-3 px-1.5 py-1.5">L</div>
                        <div className="border-2 border-[#DDE5B6] text-[#ADC178] shadow-md rounded-md mt-3 px-1.5 py-1.5">M</div>
                        <div className="border-2 border-[#DDE5B6] text-[#ADC178] shadow-md rounded-md mt-3 px-1.5 py-1.5">S</div>
                        <div className="border-2 border-[#DDE5B6] text-[#ADC178] shadow-md rounded-md mt-3 px-1.5 py-1.5">XS</div>
                    </div>

                    <div className="flex flex-row justify-between mt-5">
                        <Link href="#" className="bg-[#DDE5B6] text-[#6C584C] rounded-xl self-start px-2 py-2 p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                              </svg>                                      
                        </Link>
                        <Link href="#" className="text-[#6C584C] text-sm underline underline-offset-2 font-semibold uppercase rounded-xl self-start px-2 py-2 p-2">
                        Ver detalles
                        </Link>
                    </div>
                </div>
            </div>    

            <div className="shadow-lg">
                <Link href="#">
                    <Image src="/images/ropa-1.webp" width={1000} height={1000} alt="Gray dog sitting on grass with a black with white stripes sweater on" />
                </Link>
                <div className="p-5">
                    <h3><Link href="#" className="uppercase">Suéters</Link></h3>
                    <div className="flex flex-row gap-1">
                        <div className="bg-blue-600 h-5 w-5 rounded-full shadow-md mr-2 mt-3"></div>
                        <div className="bg-red-500 h-5 w-5 rounded-full shadow-md mr-2 mt-3"></div>
                        <div className="bg-yellow-400 h-5 w-5 rounded-full shadow-md mr-2 mt-3"></div>
                        <div className="bg-green-600 h-5 w-5 rounded-full shadow-md mr-2 mt-3"></div>
                        <div className="bg-purple-600 h-5 w-5 rounded-full shadow-md mr-2 mt-3"></div>
                        <div className="bg-pink-600 h-5 w-5 rounded-full shadow-md mr-2 mt-3"></div>
                        <div className="bg-black h-5 w-5 rounded-full shadow-md mr-2 mt-3"></div>
                    </div>

                    <div className="relative flex flex-row gap-2 text-xs">
                        <div className="border-2 border-[#DDE5B6] text-[#ADC178] shadow-md rounded-md mt-3 px-1.5 py-1.5">XXL</div>
                        <div className="border-2 border-[#DDE5B6] text-[#ADC178] shadow-md rounded-md mt-3 px-1.5 py-1.5">XL</div>
                        <div className="border-2 border-[#DDE5B6] text-[#ADC178] shadow-md rounded-md mt-3 px-1.5 py-1.5">L</div>
                        <div className="border-2 border-[#DDE5B6] text-[#ADC178] shadow-md rounded-md mt-3 px-1.5 py-1.5">M</div>
                        <div className="border-2 border-[#DDE5B6] text-[#ADC178] shadow-md rounded-md mt-3 px-1.5 py-1.5">S</div>
                        <div className="border-2 border-[#DDE5B6] text-[#ADC178] shadow-md rounded-md mt-3 px-1.5 py-1.5">XS</div>
                    </div>

                    <div className="flex flex-row justify-between mt-5">
                        <Link href="#" className="bg-[#DDE5B6] text-[#6C584C] rounded-xl self-start px-2 py-2 p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                              </svg>                                      
                        </Link>
                        <Link href="#" className="text-[#6C584C] text-sm underline underline-offset-2 font-semibold uppercase rounded-xl self-start px-2 py-2 p-2">
                        Ver detalles
                        </Link>
                    </div>
                </div>
            </div>    

            <div className="shadow-lg">
                <Link href="#">
                    <Image src="/images/ropa-1.webp" width={1000} height={1000} alt="Gray dog sitting on grass with a black with white stripes sweater on" />
                </Link>
                <div className="p-5">
                    <h3><Link href="#" className="uppercase">Suéters</Link></h3>
                    <div className="flex flex-row gap-1">
                        <div className="bg-blue-600 h-5 w-5 rounded-full shadow-md mr-2 mt-3"></div>
                        <div className="bg-red-500 h-5 w-5 rounded-full shadow-md mr-2 mt-3"></div>
                        <div className="bg-yellow-400 h-5 w-5 rounded-full shadow-md mr-2 mt-3"></div>
                        <div className="bg-green-600 h-5 w-5 rounded-full shadow-md mr-2 mt-3"></div>
                        <div className="bg-purple-600 h-5 w-5 rounded-full shadow-md mr-2 mt-3"></div>
                        <div className="bg-pink-600 h-5 w-5 rounded-full shadow-md mr-2 mt-3"></div>
                        <div className="bg-black h-5 w-5 rounded-full shadow-md mr-2 mt-3"></div>
                    </div>

                    <div className="relative flex flex-row gap-2 text-xs">
                        <div className="border-2 border-[#DDE5B6] text-[#ADC178] shadow-md rounded-md mt-3 px-1.5 py-1.5">XXL</div>
                        <div className="border-2 border-[#DDE5B6] text-[#ADC178] shadow-md rounded-md mt-3 px-1.5 py-1.5">XL</div>
                        <div className="border-2 border-[#DDE5B6] text-[#ADC178] shadow-md rounded-md mt-3 px-1.5 py-1.5">L</div>
                        <div className="border-2 border-[#DDE5B6] text-[#ADC178] shadow-md rounded-md mt-3 px-1.5 py-1.5">M</div>
                        <div className="border-2 border-[#DDE5B6] text-[#ADC178] shadow-md rounded-md mt-3 px-1.5 py-1.5">S</div>
                        <div className="border-2 border-[#DDE5B6] text-[#ADC178] shadow-md rounded-md mt-3 px-1.5 py-1.5">XS</div>
                    </div>

                    <div className="flex flex-row justify-between mt-5">
                        <Link href="#" className="bg-[#DDE5B6] text-[#6C584C] rounded-xl self-start px-2 py-2 p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                              </svg>                                      
                        </Link>
                        <Link href="#" className="text-[#6C584C] text-sm underline underline-offset-2 font-semibold uppercase rounded-xl self-start px-2 py-2 p-2">
                        Ver detalles
                        </Link>
                    </div>
                </div>
            </div>    
        </div>
    </div>
  )
}
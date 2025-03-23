import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <div className="w-screen bg-[#6C584C] text-[#F0EAD2]">
        <div className="container mx-auto py-5 px-5">
            <div className="grid grid-cols-1 place-items-center md:grid-cols-3 md:justify-evenly md:gap-7 gap-5">
                
                <div className="flex flex-col gap-2 place-items-center md:mt-5">
                    <div className="md:flex md:flex-row md:gap-3 place-items-center">
                        <div className="border-2 border-[#F0EAD2] w-12 h-12 rounded-full p-1">
                            <Image src="/images/logo.svg" width={1000} height={1000} alt="logo" />
                        </div>
                        <div className="text-[#F0EAD2] mt-2 text-center md:mt-0">
                            <h1 className="text-lg font-semibold md:text-2xl">Pup Paw Shop</h1>
                            <p className="text-sm">Para consentir a tu perrito</p>
                        </div>
                    </div>    
                        
                    <div className="flex flex-row gap-2 place-items-center mt-3 mb-5 md:ml-14 md:gap-4 md:items-center">
                        
                        {/*Facebook icon*/}
                        <Link href="https://www.facebook.com" target="_blank" className="h-5 w-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
                        </svg>
                        </Link>
                        
                        <Link href="https://wwww.instagram.com" target="_blank" className="h-5 w-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                        </Link>
                        
                        {/*Twitter icon*/}
                        <Link href="" target="_blank" className="h-5 w-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                            </svg>
                        </Link>
                        
                        {/*Youtube icon*/}
                        <Link href="" target="_blank" className="h-5 w-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 560 500">
                                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                            </svg>
                        </Link>
                        
                        {/*TikTok icon*/}
                        <Link href="" target="_blank" className="h-5 w-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                            </svg>
                        </Link>
                    </div>
                </div>    

                <div className="flex flex-col gap-2 justify-start md:place-items-start">
                    <h3 className="text-xl font-semibold text-center">Nosotros</h3>
                    <Link href="" className="text-m">Historia</Link>
                    <Link href="" className="text-m">Políticas de Privacidad</Link>
                    <Link href="" className="text-m">Términos y condiciones</Link>
                    
                </div>

                <div className="flex flex-col gap-2 justify-start md:place-items-start">
                    <h3 className="text-xl font-semibold text-center">Contacto</h3>
                    <Link href="" className="flex text-sm place-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>                          
                        Calle 123<br />Distrito Nacional, República Dominicana
                    </Link>
                    <div className="flex text-sm place-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>                          
                        Horario<br />Lunes a viernes: 08:00AM a 5:00PM<br />Sábados: 08:00AM a 01:00PM<br />
                    </div>
                    <div className="flex text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                        </svg>                          
                        +1 (809) 555-5555
                    </div>
                    
                </div>
                
            </div>
            

            <div className="flex justify-center mt-5 border-t-2 border-t-[#F0EAD2] text-xs">
                <p className="mt-2">&copy;Copyrights Reserved 2025</p>
            </div>

        </div>
    </div> 
  )
}

export default Footer
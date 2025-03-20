import Image from "next/image"

const Banner = () => {
  return (
    <div className="relative flex flex-row bg-gradient-to-l from-[#F0EAD2] via-[#A98467] to-[#6C584C] mb-10 py-5 px-3 justify-around">
        <div className="flex flex-col justify-center px-5">
            <h1 className="flex text-3xl md:text-5xl lg:text-7xl min-[1969px]:text-9xl text-center uppercase font-semibold text-[#F0EAD2]">
                Los mejores productos para tu peludito
            </h1>
            <a href="#" className="flex relative text-l text-center justify-center">
                <h2 className="bg-[#ADC178] text-[#6C584C] min-[1969px]:text-xl uppercase rounded-xl px-2 py-2 mt-8 font-semibold self-start">
                    ¡Descubre todo lo que tenemos para ti!
                </h2>
            </a>
        </div>
        <div className="hidden xl:visible xl:w-1/4 xl:flex min-[1960px]:max-w-xs">
            <Image src="/images/dog_silhouette.png" width={1000} height={1000} alt="banner-ofertas" />
        </div>
    </div>
  )
}

export default Banner
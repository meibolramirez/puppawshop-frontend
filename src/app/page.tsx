import Accesories from "@/components/Accesories"
import Banner from "@/components/Banner"
import Fashion from "@/components/Fashion"
import Hygiene from "@/components/Hygiene"
import SecondNavbar from "@/components/SecondNavbar"

const home = () => {
  return (
    <div>
      <SecondNavbar />
      <Banner />
      <Fashion />
      <Accesories />
      <Hygiene />
    </div>
  )
}

export default home
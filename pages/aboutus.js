
import Link from "next/link"
import Layaout from "../components/layaout"

export default function Aboutus() {
  return (
    <Layaout
      title={'Nosotros'}
      description="Sobre nostros, guitarLA, tienda de musica"
    >
      
        <Link href="/">Home page</Link>
    </Layaout>
    
  )
}

import Link from "next/link"
import Layaout from "../components/layaout"

export default function Home() {
  return (
  <>
    
    <Layaout 
      title={'Inicio'}
      description={'Blog de música, venta de guitarras y más'}
    >
      <h1>Hola mundo en Next</h1>
      <Link href="/aboutus">About us page</Link>
    </Layaout>
  </>
  )
}

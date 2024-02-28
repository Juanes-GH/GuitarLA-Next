import Image from "next/future/image"
import Link from "next/link"

export default function Header() {
    return (
        <header>
            <div className="contenedor">
                <Image src="/img/logo.svg" width={300} height={40} alt="Image logotipo"/>
            </div>

            <nav>
                <Link href="/">
                    Home
                </Link>

                <Link href="/us">
                    Us
                </Link>

                <Link href="/blog">
                    Blog
                </Link>

                <Link href="/store">
                    Store
                </Link>
            </nav>
        </header>
    )
  }
  
import Image from "next/future/image"
import Link from "next/link"
import styles from "../styles/header.module.css"


export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>
                <Image src="/img/logo.svg" width={300} height={40} alt="Image logotipo"/>
            </div>

            <nav className={styles.navegation}>
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
  
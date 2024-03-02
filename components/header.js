import Image from "next/future/image"
import Link from "next/link"
import styles from "../styles/header.module.css"
import { useRouter } from "next/router"

export default function Header() {

    const router = useRouter();

    return (
        <header className={styles.header}>
            <div className={`contenedor ${styles.barra}`}>
                <Link href="/">
                    <a>
                        <Image src="/img/logo.svg" width={300} height={40} alt="Image logotipo"/>
                    </a>
                </Link>
            

                <nav className={styles.navegation}>
                    <Link href="/">
                        <a className={ router.pathname === '/' ? styles.active : ""}>
                            Home
                        </a>
                    </Link>

                    <Link href="/us">
                        <a className={ router.pathname === '/us' ? styles.active : ""}>
                            Us
                        </a>
                    </Link>
                    
                    <Link href="/store">
                        <a className={ router.pathname === '/store' ? styles.active : ""}>
                            Store
                        </a>
                    </Link>

                    <Link href="/blog">
                        <a className={ router.pathname === '/blog' ? styles.active : ""}>
                            Blog
                        </a>
                    </Link>

                </nav>
            </div>
        </header>
    )
  }
  
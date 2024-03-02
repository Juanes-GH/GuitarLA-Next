import Link from "next/link"
import styles from "../styles/foooter.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={`contenedor ${styles.contenido}`}>
          <nav className={styles.navegation}>
              <Link href="/">
                Home
              </Link>

              <Link href="/us">
                Us
              </Link>

              <Link href="/store">
                Store
              </Link>

              <Link href="/blog">
                Blog
              </Link>

          </nav>
            <p className={styles.copyright}>
              Todos los derechos reservados {new Date().getFullYear()}
            </p>
        </div>
    </footer>
  )
}

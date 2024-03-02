import Image from "next/image"
import Layaout from "../components/layaout"
import styles from "../styles/us.module.css"

export default function Us() {
  return (
    <Layaout
      title={'Nosotros'}
      description="Sobre nostros, guitarLA, tienda de musica"
    >
      <main className="contedor">
          <h2 className="heading">About US</h2>
          <div className={styles.contenido}>
              <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nostros" />

              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu scelerisque nunc, ut convallis metus. In sagittis porta nisi, vel aliquet urna iaculis id. Fusce porta neque eget felis efficitur convallis. Nulla facilisi. Quisque egestas magna laoreet lacinia vulputate. Nullam non vehicula mauris, quis pharetra felis. Sed ut urna ut nisl varius semper eu sed enim. Integer vulputate magna lobortis est pulvinar sodales
                </p>
                <p>
                  Vestibulum felis arcu, efficitur at aliquam a, pellentesque a dolor. Proin ac bibendum mi. In a condimentum ligula, vel imperdiet ipsum. Donec accumsan nisl non neque varius tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi vestibulum sollicitudin neque quis iaculis. Maecenas rutrum efficitur purus, pulvinar luctus urna ullamcorper sed.
                </p>
              </div>
          </div>
      </main>
    </Layaout>
  )
}

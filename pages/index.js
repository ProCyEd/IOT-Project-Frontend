import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the <a>IOT Contoller</a>
        </h1>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://cy-def-website.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/Logo.png" alt="CyDef Logo" width={72} height={30} />
          </span>
        </a>
      </footer>
    </div>
  )
}

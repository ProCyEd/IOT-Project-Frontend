import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

const home = () => {
    return (
        <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the <Link href="dashboard">IOT Contoller</Link>
        </h1>

      </main>

      <Footer></Footer>
    </div>
    )
}

export default home

import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Footer from '../components/footer'
import checkPermissions from '../components/auth/checkPerms'
import styles from '../styles/Home.module.css'

const home = () => {
    return (
        <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the <a href="dashboard" /* onClick={checkPermissions()} */ >IOT Contoller</a>
        </h1>

      </main>

      <Footer></Footer>
    </div>
    )
}

export default home

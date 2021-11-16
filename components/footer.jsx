import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const footer = () => {
    return (
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
    )
}

export default footer
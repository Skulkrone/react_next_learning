import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link legacyBehavior href="/">
        <a>Accueil</a>
      </Link>
      <Link legacyBehavior href="/blog">
        <a>Blog</a>
      </Link>
      <Link legacyBehavior href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/galery">
        Galerie
      </Link>
    </nav>
  )
}

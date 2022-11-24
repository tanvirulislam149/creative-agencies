import React from 'react'
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <p>copyright Orange labs {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer
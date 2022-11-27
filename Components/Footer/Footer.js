import React from 'react'
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <p>Copyright Creative Agency by tanvir {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer
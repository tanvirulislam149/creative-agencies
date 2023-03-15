import React from 'react'
import styles from "./ServiceCard.module.css"


const ServiceCard = ({ data }) => {
  const { name, img, des } = data;
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={img} alt="graphic-Des" />
      </div>
      <p className={styles.cardTitle}>{name}</p>
      <p className={styles.cardText}>{des}</p>
      <div className={styles.btnContainer}>
        <button className={styles.detailsBtn}>See Details</button>
      </div>
    </div>
  )
}

export default ServiceCard
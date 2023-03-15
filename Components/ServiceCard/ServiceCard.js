import { useRouter } from 'next/router';
import React from 'react'
import styles from "./ServiceCard.module.css"


const ServiceCard = ({ data }) => {
  const router = useRouter();
  const { id, name, img, des } = data;
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={img} alt="graphic-Des" />
      </div>
      <p className={styles.cardTitle}>{name}</p>
      <p className={styles.cardText}>{des}</p>
      <div className={styles.btnContainer}>
        <button onClick={() => router.push(`/details/${id}`)} className={styles.detailsBtn}>See Details</button>
      </div>
    </div>
  )
}

export default ServiceCard
import { useRouter } from 'next/router';
import React from 'react'
import styles from "./ServiceCard.module.css"


const ServiceCard = ({ course }) => {
  const router = useRouter();
  const { _id, name, picture, short_des } = course;
  console.log(course);
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={picture} alt="graphic-Des" />
      </div>
      <p className={styles.cardTitle}>{name}</p>
      <p className={styles.cardText}>{short_des}</p>
      <div className={styles.btnContainer}>
        <button onClick={() => router.push(`/details/${_id}`)} className={styles.detailsBtn}>See Details</button>
      </div>
    </div>
  )
}

export default ServiceCard
import React from 'react'
import styles from "./FeedbackCard.module.css"

const FeedbackCard = ({ data }) => {
  const { name, img, des, company } = data;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.imgContainer}>
          <img src={img} alt="" />
        </div>
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.company}>{company}</p>
        </div>
      </div>
      <div>
        <p className={styles.description}>{des}</p>
      </div>
    </div>
  )
}

export default FeedbackCard
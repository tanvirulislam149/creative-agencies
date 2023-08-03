import React from 'react'
import styles from "./FeedbackCard.module.css"

const FeedbackCard = ({ data }) => {
  const { name, reviewerImg, description, company } = data;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.imgContainer}>
          <img className={styles.image} src={reviewerImg} alt="" />
        </div>
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.company}>{company}</p>
        </div>
      </div>
      <div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

export default FeedbackCard
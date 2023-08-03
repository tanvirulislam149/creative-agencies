import React from 'react'
import FeedbackCard from '../FeedbackCard/FeedbackCard'
import styles from "./Feedback.module.css"
import { useGetReviewsQuery } from '../../Redux/Services/Review'
import Loading from '../Loading/Loading'

const Feedback = () => {
  const { data, isLoading, error } = useGetReviewsQuery();


  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Clients <span>Feedback</span></h1>
      <div className={styles.cardContainer}>
        {
          // data.map(d => <FeedbackCard key={d.id} data={d} />)
          isLoading ? <Loading /> : data.map(d => <FeedbackCard key={d._id} data={d} />)
        }
      </div>
    </div>
  )
}

export default Feedback
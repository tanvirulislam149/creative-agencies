import React from 'react'
import FeedbackCard from '../FeedbackCard/FeedbackCard'
import styles from "./Feedback.module.css"

const data = [
  { id: 1, name: "Karen Page", img: "https://i.ibb.co/CvPtzXR/customer-1.png", company: "CEO, Manpol", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat" },
  { id: 2, name: "Walter White", img: "https://i.ibb.co/zfrNbVF/customer-2.png", company: "CEO, Manpol", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat" },
  { id: 3, name: "Soul Goodman", img: "https://i.ibb.co/B3K14sp/customer-3.png", company: "CEO, Manpol", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat" },
]

const Feedback = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Clients <span>Feedback</span></h1>
      <div className={styles.cardContainer}>
        {
          data.map(d => <FeedbackCard key={d.id} data={d} />)
        }
      </div>
    </div>
  )
}

export default Feedback
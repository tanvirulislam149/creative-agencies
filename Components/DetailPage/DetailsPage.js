import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import styles from "./DetailsPage.module.css"
import { MdLanguage } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const DetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [course, setCourse] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/courses/${id}`)
      .then(res => {
        // handle success
        console.log(res.data);
        setCourse(res.data)
      })
      .catch(err => {
        // handle error
        console.log(err);
      })
  }, [])

  return (
    <div>
      {course ?
        <div className={styles.container}>
          <div className={styles.banner}>
            <div className={styles.bannerContent}>
              <h1 className={styles.bannerText}>{course.name_details}</h1>
              <p className={styles.shortDetails}>{course.short_details}</p>
              <div className={styles.boxContainer}>
                <div className={styles.box}>
                  <h3 className={styles.boxText}>Course Duration</h3>
                  <h1 className={styles.boxText}>{course.duration} hrs</h1>
                </div>
                <div className={styles.box}>
                  <h3 className={styles.boxText}>Course Projects</h3>
                  <h1 className={styles.boxText}>{course.project}+</h1>
                </div>
              </div>
              <div className={styles.priceContainer}>
                <h2 className={styles.price}>Price: ${course.price}</h2>
                <button className={styles.buyBtn}>Buy Now</button>
                <button className={styles.buyBtn}>Start Course</button>
              </div>
              <div className={styles.info}>
                <p>Created by <u>{course.author}</u></p>
                <p className={styles.language}><MdLanguage className={styles.langIcon} /> {course.language}</p>
                <p>{course.students}+ Students</p>
              </div>
            </div>
            <div className={styles.bannerContent}>
              <img className={styles.bannerImg} src={course.details_img} alt="" />
            </div>
          </div>
          <div className={styles.desContainer}>
            <h1 className={styles.description}>What you'll learn</h1>
            <div className={styles.details}>
              {
                course?.details?.map(c =>
                  <div className={styles.detailsElement}>
                    <TiTick className={styles.tickIcon} />
                    <p>{c}</p>
                  </div>)
              }
            </div>
          </div>
          <div className={styles.desContainer}>
            <h1 className={styles.description}>Requirements</h1>
            <div className={styles.details}>
              {
                course?.requirements?.map(c =>
                  <div className={styles.detailsElement}>
                    <TiTick className={styles.tickIcon} />
                    <p>{c}</p>
                  </div>)
              }
            </div>
          </div>
        </div> :
        <div>
          <h1>No data available</h1>
        </div>
      }
    </div>
  )
}

export default DetailsPage
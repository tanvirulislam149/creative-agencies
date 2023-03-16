import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import styles from "./DetailsPage.module.css"
import { MdLanguage } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#fbd062',
  border: '2px solid #fbd062',
  boxShadow: 24,
  p: 4,
  textAlign: "center"
};

const DetailsPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  const { id } = router.query;
  const [course, setCourse] = useState([]);

  const [paymentModal, setPaymentModal] = useState(false);
  const handlePaymentModalOpen = () => setPaymentModal(true);
  const handlePaymentModalClose = () => setPaymentModal(false);

  const [courseModal, setCourseModal] = useState(false);
  const handleCourseModalOpen = () => setCourseModal(true);
  const handleCourseModalClose = () => setCourseModal(false);

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
              <img className={styles.bannerImg} src={course.details_img} alt="" />
            </div>
            <div className={styles.bannerContent}>
              <h1 className={styles.bannerText}>{course.name_details}</h1>
              <p className={styles.shortDetails}>{course.short_details}</p>
              <div className={styles.boxContainer}>
                <div className={styles.box}>
                  <h3 className={styles.boxText}>Course Duration</h3>
                  <h2 className={styles.boxText}>{course.duration} hrs</h2>
                </div>
                <div className={styles.box}>
                  <h3 className={styles.boxText}>Course Projects</h3>
                  <h2 className={styles.boxText}>{course.project}+</h2>
                </div>
              </div>
              <div className={styles.priceContainer}>
                <h2 className={styles.price}>Price: ${course.price}</h2>
                <button onClick={handlePaymentModalOpen} className={styles.buyBtn}>Buy Now</button>
                <button onClick={handleCourseModalOpen} className={styles.buyBtn}>Start Course</button>
              </div>
              <div className={styles.info}>
                <p>Created by <u>{course.author}</u></p>
                <p className={styles.language}><MdLanguage className={styles.langIcon} /> {course.language}</p>
                <p>{course.students}+ Students</p>
              </div>
            </div>
          </div>
          <div className={styles.desContainer}>
            <h1 className={styles.description}>What you'll learn</h1>
            <div className={styles.details}>
              {
                course?.details?.map(c =>
                  <div className={styles.detailsElement}>
                    <TiTick className={styles.tickIcon} />
                    <p className={styles.detailsText}>{c}</p>
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
                    <p className={styles.detailsText}>{c}</p>
                  </div>)
              }
            </div>
          </div>
          {/* Payment Modal  */}
          <Modal
            open={paymentModal}
            onClose={handlePaymentModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <h1>Pay your money here</h1>
              <p>{user.email}</p>
              <p>{course.name_details}</p>
            </Box>
          </Modal>
          {/* Start course Modal  */}
          <Modal
            open={courseModal}
            onClose={handleCourseModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <h1>You haven't paid for the course yet</h1>
            </Box>
          </Modal>
        </div> :
        <div>
          <h1>No data available</h1>
        </div>
      }
    </div>
  )
}

export default DetailsPage
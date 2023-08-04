import React, { useEffect, useState } from 'react'
import styles from "./AddReview.module.css"
import { Box, Toolbar } from '@mui/material'
import SideNav from '../SideNav/SideNav'
import { useForm } from 'react-hook-form';
import { useAddReviewMutation } from '../../Redux/Services/Review';
import LoadingModal from "../LoadingModal/LoadingModal"
import SuccessModal from '../SuccessModal/SuccessModal';
import { useSelector } from 'react-redux';

const drawerWidth = 200;

const AddReview = () => {
  const userImg = useSelector(state => state?.user?.user?.photoURL);
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const [addReview, { isLoading, isSuccess, isError, error }] = useAddReviewMutation();
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (isSuccess) {
      setSuccessModalOpen(true);
      setSuccessMessage("Review saved successfully.");
    }
  }, [isSuccess]);



  const onSubmit = (data) => {
    const finalData = { ...data, reviewerImg: userImg }
    addReview(finalData);
    reset();
  }


  return (
    <Box className={styles.boxContainer} sx={{ display: 'flex' }}>
      <Box
        className={styles.boxContent}
        component="main"
        sx={{ flexGrow: 1, p: 0, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <div>
          <p className={styles.addReview}>Add Review</p>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formContainer}>
              <div className={styles.leftColumn}>
                <input type='text' placeholder="Your name" {...register("name", { required: true, })} /> <br />
                <input type='text' placeholder="Designation, Company's name" {...register("company", { required: true, })} /> <br />
                <textarea rows={5} placeholder='Tell us what you think' {...register("description", { required: true, })} /> <br />
              </div>
              <div className={styles.btnContainer}>
                <input className={styles.submitBtn} type="submit" value="Send" />
              </div>
            </div>
          </form>
        </div>
      </Box>
      {/* modals */}
      <LoadingModal loadingModal={isLoading} />
      <SuccessModal successMessage={successMessage} successModalOpen={successModalOpen} setSuccessModalOpen={setSuccessModalOpen} />
    </Box>
  )
}

export default AddReview
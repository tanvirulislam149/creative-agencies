import React from 'react'
import styles from "./AddReview.module.css"
import { Box, Toolbar } from '@mui/material'
import SideNav from '../SideNav/SideNav'
import { useForm } from 'react-hook-form';

const drawerWidth = 200;

const AddReview = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
                <input type='email' placeholder="Designation, Company's name" {...register("email", { required: true, })} /> <br />
                <textarea rows={5} placeholder='Tell us what you think' {...register("description", { required: true, })} /> <br />
              </div>
              <div className={styles.btnContainer}>
                <input className={styles.submitBtn} type="submit" value="Send" />
              </div>
            </div>
          </form>
        </div>
      </Box>
    </Box>
  )
}

export default AddReview
import React from 'react'
import styles from "./AddOrder.module.css"
import { Box, Toolbar } from '@mui/material'
import { useForm } from 'react-hook-form';

const drawerWidth = 200;

const AddOrder = () => {
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
          <p className={styles.myProfile}>Add Order</p>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formContainer}>
              <div className={styles.leftColumn}>
                <input type='text' placeholder="Your name / company's name" {...register("name", { required: true, })} /> <br />
                <input type='email' placeholder="Your email address" {...register("email", { required: true, })} /> <br />
                <input type='text' placeholder="Service you want" {...register("service", { required: true, })} /> <br />
                <textarea rows={5} placeholder='Project Details' {...register("description", { required: true, })} /> <br />
              </div>
              <div className={styles.priceCont}>
                <input type='number' placeholder='Price' {...register("price", { required: true, })} /> <br />
                <label className={styles.picture}>
                  <img src="https://cdn-icons-png.flaticon.com/512/126/126477.png" />
                  <p>Upload project image</p>
                  {/* <input className={styles.pictureInput} type="file" name="" /> */}
                  <input className={styles.pictureInput} type='file' {...register("picture", { required: true, })} />
                </label>
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

export default AddOrder
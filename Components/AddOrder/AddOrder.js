import React from 'react'
import styles from "./AddOrder.module.css"
import { Box, FormControl, MenuItem, Select, Toolbar } from '@mui/material'
import { useForm } from 'react-hook-form';

const drawerWidth = 200;

const AddOrder = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  const onSubmit = (data) => {
    const finalData = { ...data, service: age }
    console.log(finalData);
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
                <FormControl sx={{ marginBottom: "10px", marginTop: "5px", width: "60%", background: "white" }}>
                  <Select
                    required
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="">
                      <span className={styles.selectPlaceholder}>Service you want</span>
                    </MenuItem>
                    <MenuItem value={10}><span className={styles.selectOption}>Your email address</span></MenuItem>
                    <MenuItem value={20}><span className={styles.selectOption}>email address</span></MenuItem>
                    <MenuItem value={30}><span className={styles.selectOption}>Your email</span></MenuItem>
                  </Select>
                </FormControl> <br />
                <textarea rows={5} placeholder='Project Details' {...register("description", { required: true, })} /> <br />
              </div>
              <div className={styles.priceCont}>
                <input type='Number' placeholder='Price' {...register("price", { required: true, })} /> <br />
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
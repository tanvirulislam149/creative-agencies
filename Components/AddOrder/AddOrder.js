import React, { useEffect, useState } from 'react'
import styles from "./AddOrder.module.css"
import { Box, FormControl, MenuItem, Select, Toolbar } from '@mui/material'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useAddOrderMutation } from '../../Redux/Services/orders';
import SuccessModal from '../SuccessModal/SuccessModal';
import LoadingModal from '../LoadingModal/LoadingModal';
import axios from 'axios';

const drawerWidth = 200;

const AddOrder = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const [age, setAge] = React.useState('');
  const [option, setOption] = useState([]);
  const userEmail = useSelector(state => state?.user?.user?.email);
  const [loadingModal, setLoadingModal] = React.useState(false);
  const [addOrder, { isLoading, isSuccess, isError, error }] = useAddOrderMutation();
  // console.log(age);


  // modal
  const [successModalOpen, setSuccessModalOpen] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    axios.get("http://localhost:5000/course/getCourseName")
      .then(res => setOption(res.data))
      .catch(err => console.log(err))
  }, [])


  useEffect(() => {
    if (isLoading) {
      setLoadingModal(true);
    }
    if (isSuccess) {
      setAge("");
      setSuccessModalOpen(true);
      setSuccessMessage("Course Added Successfully");
      setLoadingModal(false);
      reset();
    }
    if (isError) {
      setSuccessModalOpen(true);
      setLoadingModal(false);
      setSuccessMessage("Add product failed");
    }
  }, [isLoading, isSuccess, isError])

  const onSubmit = (data) => {
    setLoadingModal(true);
    console.log(data);
    const image = data.fileUrl[0];
    const picture = new FormData();
    picture.append("file", image);
    picture.append("upload_preset", "creative_agencies")
    picture.append("cloud_name", "tanvirulislam149")
    axios.post("https://api.cloudinary.com/v1_1/tanvirulislam149/image/upload", picture)
      .then(async res => {
        // console.log(res);
        if (res.data.url) {
          console.log(res.data.url);
          const finalData = { ...data, price: Number(data.price), fileUrl: res.data.url, status: "pending", service: age.title, serviceImg: age.icon, serviceDescription: age.description }
          console.log(finalData);
          addOrder(finalData);
        }
      })
      .catch(err => {
        setLoadingModal(false);
        setSuccessModalOpen(true);
        setSuccessMessage("Image upload failed");
      })
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
                <input type='email' value={userEmail} placeholder="Your email address" {...register("email", { required: true, })} /> <br />
                <FormControl className={styles.selectCont} sx={{ marginBottom: "10px", marginTop: "5px", background: "white" }}>
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
                    {
                      option.length ? option.map(o =>
                        <MenuItem key={o._id} value={o}><span className={styles.selectOption}>{o.title}</span></MenuItem>
                      ) : ""
                    }
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
                  <input className={styles.pictureInput} type='file' {...register("fileUrl", { required: true, })} />
                </label>
              </div>
              <div className={styles.btnContainer}>
                <input className={styles.submitBtn} type="submit" value="Send" />
              </div>
            </div>
          </form>
          {/* Success modal */}
          <SuccessModal successMessage={successMessage} successModalOpen={successModalOpen} setSuccessModalOpen={setSuccessModalOpen}></SuccessModal>
          <LoadingModal loadingModal={loadingModal}></LoadingModal>
        </div>
      </Box>
    </Box>
  )
}

export default AddOrder
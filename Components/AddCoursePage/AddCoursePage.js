import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import styles from "./AddCoursePage.module.css"
import { useForm } from "react-hook-form";
import axios from 'axios';
import SuccessModal from '../SuccessModal/SuccessModal';
import LoadingModal from "../LoadingModal/LoadingModal"
import { useSelector } from 'react-redux';

const drawerWidth = 200;

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

const AddCoursePage = () => {
  const admin = useSelector((state) => state.admin.admin);
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const [loadingModal, setLoadingModal] = React.useState(false);

  // modal
  const [successModalOpen, setSuccessModalOpen] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState("");


  const onSubmit = data => {
    setLoadingModal(true);
    const image = data.picture[0];
    const picture = new FormData();
    picture.append("file", image);
    picture.append("upload_preset", "creative_agencies")
    picture.append("cloud_name", "tanvirulislam149")
    axios.post("https://api.cloudinary.com/v1_1/tanvirulislam149/image/upload", picture)
      .then(async res => {
        // console.log(res);
        if (res.data.url) {
          console.log(res.data.url);
          const finalData = { title: data.title, description: data.description, icon: res.data.url }
          axios.post(`http://localhost:5000/course/addCourse`, finalData)
            .then(res => {
              if (res.acknowledged) {
                console.log(res.data);
                setSuccessModalOpen(true);
                setSuccessMessage("Course Added Successfully");
                setLoadingModal(false);
                reset();
              }
            })
            .catch(err => {
              console.log(err);
              setSuccessModalOpen(true);
              setLoadingModal(false);
              setSuccessMessage("Add product failed");
            })
        }
      })
      .catch(err => {
        // console.log(err.message);
        setSuccessModalOpen(true);
        setSuccessMessage("Image upload failed");
      })
  };


  return (
    <Box className={styles.boxContainer} sx={{ display: 'flex' }}>
      {/* <SideNav admin={true}></SideNav> */}
      <Box
        className={styles.boxContent}
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        {/* <Toolbar /> */}
        <div>
          <p className={styles.addCourse}>Add Services</p>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formContainer}>
              <div className={styles.leftColumn}>
                <label htmlFor="title">Service Title</label><br />
                <input placeholder='Enter title' {...register("title", { required: true, })} /> <br />
                <label htmlFor="title">Description</label><br />
                <textarea rows={5} placeholder='Enter Description' {...register("description", { required: true, })} /> <br />
              </div>
              <div className={styles.leftColumn}>
                <label htmlFor="title">Icon</label><br />
                <label className={styles.picture}>
                  <img src="https://cdn-icons-png.flaticon.com/512/126/126477.png" />
                  <p>Upload Image</p>
                  {/* <input className={styles.pictureInput} type="file" name="" /> */}
                  <input className={styles.pictureInput} type='file' {...register("picture", { required: true, })} />
                </label>
              </div>
            </div>
            <div className={styles.btnContainer}>
              <input className={styles.submitBtn} type="submit" />
            </div>
          </form>
        </div>
      </Box>
      {/* Success modal */}
      <SuccessModal successMessage={successMessage} successModalOpen={successModalOpen} setSuccessModalOpen={setSuccessModalOpen}></SuccessModal>
      <LoadingModal loadingModal={loadingModal}></LoadingModal>
    </Box>
  );
}


export default AddCoursePage;
import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from "./AddCoursePage.module.css"
import SideNav from '../SideNav/SideNav';
import { useForm } from "react-hook-form";
import axios from 'axios';

const drawerWidth = 200;

const AddCoursePage = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const [detailsField, setDetailsField] = React.useState([""]);
  const [requirementField, setRequirementField] = React.useState([""]);

  const onSubmit = data => {
    console.log(data)
    // axios.post(`http://localhost:5000/addProduct`, data)
    //   .then(res => {
    //     // handle success
    //     console.log(res.data);
    //   })
    //   .catch(err => {
    //     // handle error
    //     console.log(err);
    //   })
    // reset();
  };

  const handleDetailsField = () => {
    setDetailsField([...detailsField, ""])

  }

  const handleRequirementField = () => {
    setRequirementField([...requirementField, ""])
  }

  return (
    <Box className={styles.boxContainer} sx={{ display: 'flex' }}>
      <SideNav></SideNav>
      <Box
        className={styles.boxContent}
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <div>
          <p className={styles.addCourse}>Add Course</p>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formContainer}>
              <div className={styles.leftColumn}>
                <label htmlFor="title">Title</label><br />
                <input placeholder='Enter title' {...register("title", { required: true, })} /> <br />
                <label htmlFor="course_name">Course Name</label><br />
                <input placeholder='Enter Course Name' {...register("course_name", { required: true, })} /> <br />
                <label htmlFor="description">Description</label><br />
                <textarea placeholder='Enter Description' {...register("description", { required: true })} /> <br />
                <label htmlFor="short_details">Short Details</label><br />
                <textarea placeholder='Enter Short Details' {...register("short_details", { required: true })} /> <br />
                <div className={styles.details}>
                  <label htmlFor="details">Details</label>
                  <input type="button" onClick={handleDetailsField} className={styles.addField} value="Add Field" />
                </div>
                {
                  detailsField.map(d => <><textarea placeholder='Enter Details' {...register("details", { required: true })} /> <br /></>)
                }
                <div className={styles.details}>
                  <label htmlFor="requirement">Requirements</label>
                  <input type="button" onClick={handleRequirementField} className={styles.addField} value="Add Field" />
                </div>
                {
                  requirementField.map(d => <><textarea placeholder='Enter Requirements' {...register("requirements", { required: true })} /> <br /></>)
                }
              </div>
              <div className={styles.leftColumn}>

                <label htmlFor="language">Language</label><br />
                <input placeholder='Enter Language' {...register("language", { required: true, })} /> <br />
                <label htmlFor="author">Author</label> <br />
                <input placeholder="Enter Author's Name" {...register("author", { required: true, })} /> <br />
                <label htmlFor="duration">Duration</label><br />
                <input placeholder='Enter Course Duration' type="number" {...register("duration", { required: true })} /> <br />
                <label htmlFor="project">Project</label><br />
                <input placeholder='Enter Project Number' type="number" {...register("project", { required: true })} /> <br />
                <label htmlFor="price">Price</label><br />
                <input placeholder='Enter Price' type="number" {...register("price", { required: true })} /> <br />
                <label htmlFor="students">Students</label><br />
                <input placeholder='Enter Student Number' type="number" {...register("students", { required: true })} /> <br />
                <label htmlFor="picture">Picture</label><br />
                <input placeholder='Enter Picture Link' {...register("picture", { required: true })} /> <br />
                <label htmlFor="icon">Icon</label><br />
                <input placeholder='Enter Icon Link' {...register("icon", { required: true })} /> <br />
                <label htmlFor="video_link">Video Link</label><br />
                <input placeholder='Enter Video Link' {...register("video_link", { required: true, })} /> <br />
              </div>
            </div>
            <div className={styles.btnContainer}>
              <input className={styles.submitBtn} type="submit" />
            </div>
          </form>
        </div>
      </Box>
    </Box>
  );
}


export default AddCoursePage;
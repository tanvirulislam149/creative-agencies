import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from "./AddCoursePage.module.css"
import SideNav from '../SideNav/SideNav';
import { useForm } from "react-hook-form";




const drawerWidth = 200;

const AddCoursePage = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

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
                <input {...register("title", { required: true, })} /> <br />
                <label htmlFor="course_name">Course Name</label><br />
                <input {...register("course_name", { required: true, })} /> <br />
                <label htmlFor="description">Description</label><br />
                <textarea {...register("description", { required: true })} /> <br />
                <label htmlFor="short_details">Short Details</label><br />
                <textarea {...register("short_details", { required: true })} /> <br />
                <label htmlFor="details">Details</label><br />
                <textarea {...register("details", { required: true })} /> <br />
                <label htmlFor="requirements">Requirements</label><br />
                <textarea {...register("requirements", { required: true })} /> <br />
                <label htmlFor="language">Language</label><br />
                <input {...register("language", { required: true, })} /> <br />
              </div>
              <div className={styles.leftColumn}>
                <label htmlFor="author">Author</label> <br />
                <input {...register("author", { required: true, })} /> <br />
                <label htmlFor="duration">Duration</label><br />
                <input type="number" {...register("duration", { required: true })} /> <br />
                <label htmlFor="project">Project</label><br />
                <input type="number" {...register("project", { required: true })} /> <br />
                <label htmlFor="price">Price</label><br />
                <input type="number" {...register("price", { required: true })} /> <br />
                <label htmlFor="students">Students</label><br />
                <input type="number" {...register("students", { required: true })} /> <br />
                <label htmlFor="picture">Picture</label><br />
                <input {...register("picture", { required: true })} /> <br />
                <label htmlFor="icon">Icon</label><br />
                <input {...register("icon", { required: true })} /> <br />
                <label htmlFor="video_link">Video Link</label><br />
                <input {...register("video_link", { required: true, })} /> <br />
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
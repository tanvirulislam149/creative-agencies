import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from "./AddCoursePage.module.css"
import SideNav from '../SideNav/SideNav';
import { useForm } from "react-hook-form";
import { Alert } from '@mui/material';


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
          <h1>Add Course</h1>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name:</label>
            <input {...register("name", { required: true, })}
              aria-invalid={errors.name ? "true" : "false"} /> <br />
            {errors.name?.type === 'required' && <Alert severity="error">This is an error alert — check it out!</Alert>}
            <label htmlFor="name_details">Name in Details:</label>
            <input {...register("name_details", { required: true, })} /> <br />
            <label htmlFor="short_des">Short Description:</label>
            <input {...register("short_des", { required: true, })} /> <br />
            <label htmlFor="short_details">Short Details:</label>
            <input {...register("short_details", { required: true, })} /> <br />
            <label htmlFor="details">Details:</label>
            <input {...register("details", { required: true, })} /> <br />
            <label htmlFor="requirements">Requirements:</label>
            <input {...register("requirements", { required: true, })} /> <br />
            <label htmlFor="language">Language:</label>
            <input {...register("language", { required: true, })} /> <br />
            <label htmlFor="author">Author:</label>
            <input {...register("author", { required: true, })} /> <br />
            <label htmlFor="duration">Duration:</label>
            <input type="number" {...register("duration", { required: true })} /> <br />
            <label htmlFor="project">Project:</label>
            <input type="number" {...register("project", { required: true })} /> <br />
            <label htmlFor="price">Price:</label>
            <input type="number" {...register("price", { required: true })} /> <br />
            <label htmlFor="students">Students:</label>
            <input type="number" {...register("students", { required: true })} /> <br />
            <label htmlFor="details_img">Image for Details:</label>
            <input {...register("details_img", { required: true })} /> <br />
            <label htmlFor="picture">Picture:</label>
            <input {...register("picture", { required: true })} /> <br />
            <label htmlFor="video_link">Video Link:</label>
            <input {...register("video_link", { required: true, })} /> <br />
            <input type="submit" />
          </form>
        </div>
      </Box>
    </Box>
  );
}


export default AddCoursePage;
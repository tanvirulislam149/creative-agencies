import React, { useEffect, useState } from 'react'
import styles from "./Services.module.css"
import ServiceCard from "../ServiceCard/ServiceCard"
import { useGetCoursesQuery } from '../../Redux/Services/courses';
import Loading from '../Loading/Loading';
const axios = require('axios').default;

const Services = () => {
  // const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:5000/course/getCourses')
  //     .then(res => {
  //       // handle success
  //       setCourses(res.data)
  //     })
  //     .catch(err => {
  //       // handle error
  //       console.log(err);
  //     })
  // }, [])

  const { data: courses, error, isLoading } = useGetCoursesQuery();


  return (
    <div className={styles.container}>
      <h1 className={styles.serviceHeader}>Provide awesome <span>services</span></h1>
      {
        isLoading ? <Loading></Loading> : courses?.length ?
          <div className={styles.serviceContainer}>
            {
              courses.map(d => <ServiceCard key={d._id} course={d} />)
            }
          </div> : ""
      }

    </div>
  )
}

export default Services
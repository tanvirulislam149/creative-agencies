import React, { useEffect, useState } from 'react'
import styles from "./Services.module.css"
import ServiceCard from "../ServiceCard/ServiceCard"
const axios = require('axios').default;

const data = [
  { id: 1, name: "Web Design", img: "https://i.ibb.co/6J8zTnL/web-Design.png", des: "We craft stunning and amazing web UI, using a well drrafted UX to fit your product." },
  { id: 2, name: "Graphics Design", img: "https://i.ibb.co/kJgrYtG/graphic-Des.png", des: "Amazing flyers, social media posts and brand representations that would make your brand stand out." },
  { id: 3, name: "Web Development", img: "https://i.ibb.co/3YkgpJH/webDev.png", des: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general." }
]


const Services = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/courses')
      .then(res => {
        // handle success
        console.log(res.data);
        setCourses(res.data)
      })
      .catch(err => {
        // handle error
        console.log(err);
      })
  }, [])


  return (
    <div className={styles.container}>
      <h1 className={styles.serviceHeader}>Provide awesome <span>services</span></h1>
      <div className={styles.serviceContainer}>
        {
          courses.map(d => <ServiceCard key={d._id} course={d} />)
        }
      </div>
    </div>
  )
}

export default Services
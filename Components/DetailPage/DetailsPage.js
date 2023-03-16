import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import styles from "./DetailsPage.module.css"

const data = [
  { id: 1, name: "Web Design", img: "https://i.ibb.co/6J8zTnL/web-Design.png", des: "We craft stunning and amazing web UI, using a well drrafted UX to fit your product." },
  { id: 2, name: "Graphics Design", img: "https://i.ibb.co/kJgrYtG/graphic-Des.png", des: "Amazing flyers, social media posts and brand representations that would make your brand stand out." },
  { id: 3, name: "Web Development", img: "https://i.ibb.co/3YkgpJH/webDev.png", des: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general." }
]

const DetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [course, setCourse] = useState([]);
  console.log(course);

  useEffect(() => {
    axios.get(`http://localhost:5000/courses/${id}`)
      .then(res => {
        // handle success
        console.log(res.data);
        setCourse(res.data)
      })
      .catch(err => {
        // handle error
        console.log(err);
      })
  }, [])

  return (
    <div>
      {course ?
        <div>
          <img src={course.details_img} alt="" />
          <h1>{course.name}</h1>
          <p>{course.details}</p>
        </div> :
        <h1>No data available</h1>
      }
    </div>
  )
}

export default DetailsPage
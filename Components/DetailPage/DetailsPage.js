import { useRouter } from 'next/router';
import React from 'react'
import styles from "./DetailsPage.module.css"

const data = [
  { id: 1, name: "Web Design", img: "https://i.ibb.co/6J8zTnL/web-Design.png", des: "We craft stunning and amazing web UI, using a well drrafted UX to fit your product." },
  { id: 2, name: "Graphics Design", img: "https://i.ibb.co/kJgrYtG/graphic-Des.png", des: "Amazing flyers, social media posts and brand representations that would make your brand stand out." },
  { id: 3, name: "Web Development", img: "https://i.ibb.co/3YkgpJH/webDev.png", des: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general." }
]

const DetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const course = data.find(e => {
    return e.id == id;
  })

  return (
    <div>
      {course &&
        <>
          <img src={course.img} alt="" />
          <h1>{course.name}</h1>
          <p>{course.des}</p>
        </>
      }
    </div>
  )
}

export default DetailsPage
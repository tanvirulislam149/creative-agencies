import React from 'react'
import Image from "next/image"
import styles from "./Banner.module.css"
import frame from "../../images/logos/Frame.png"

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner_text}>
        <h1>Let's Grow Your Brand To The Next Level</h1>
        <p className={styles.loremText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
        <a href='/#contact' className={styles.button}>Hire Us</a>
      </div>
      <div className={styles.banner_img}>
        <Image
          className={styles.img}
          src={frame}
          alt="Picture of logo"
        />
      </div>
    </div>
  )
}

export default Banner
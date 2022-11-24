import React from 'react'
import Image from "next/image"
import styles from "./Banner.module.css"
import frame from "../../images/logos/Frame.png"

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner_text}>
        <h1>Let's Grow Your Brand To The Next Level</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
        <button className={styles.button}>Hire Us</button>
      </div>
      <div className={styles.banner_img}>
        <Image
          src={frame}
          alt="Picture of logo"
          width={625}
          height={420}
        />
      </div>
    </div>
  )
}

export default Banner
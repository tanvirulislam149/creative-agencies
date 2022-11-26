import React from 'react'
import google from "../../images/logos/google.png"
import airbnb from "../../images/logos/airbnb.png"
import netflix from "../../images/logos/netflix.png"
import slack from "../../images/logos/slack.png"
import uber from "../../images/logos/uber.png"
import Image from 'next/image'
import styles from "./CompanyName.module.css"

const CompanyName = () => {
  return (
    <div className={styles.container}>
      <marquee width="85%" direction="left" height="100px">
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src={google}
            alt="Picture of the author"
            width={130}
            height={45}
          />
          <Image
            className={styles.img}
            src={airbnb}
            alt="Picture of the author"
            width={160}
            height={51}
          />
          <Image
            className={styles.img}
            src={netflix}
            alt="Picture of the author"
            width={120}
            height={67}
          />
          <Image
            className={styles.img}
            src={slack}
            alt="Picture of the author"
            width={140}
            height={36}
          />
          <Image
            className={styles.img}
            src={uber}
            alt="Picture of the author"
            width={99}
            height={56}
          />
        </div >
      </marquee>
    </div>
  )
}

export default CompanyName
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
      <Image
        src={google}
        alt="Picture of the author"
        width={130}
        height={45}
      />
      <Image
        src={airbnb}
        alt="Picture of the author"
        width={160}
        height={51}
      />
      <Image
        src={netflix}
        alt="Picture of the author"
        width={120}
        height={67}
      />
      <Image
        src={slack}
        alt="Picture of the author"
        width={140}
        height={36}
      />
      <Image
        src={uber}
        alt="Picture of the author"
        width={99}
        height={56}
      />
    </div>
  )
}

export default CompanyName
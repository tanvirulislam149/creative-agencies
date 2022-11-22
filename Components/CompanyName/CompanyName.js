import React from 'react'
import google from "../../images/logos/google.png"
import airbnb from "../../images/logos/airbnb.png"
import netflix from "../../images/logos/netflix.png"
import slack from "../../images/logos/slack.png"
import uber from "../../images/logos/uber.png"
import Image from 'next/image'

const CompanyName = () => {
  return (
    <div>
      <Image
        src={google}
        alt="Picture of the author"
        width={130}
        height={45}
      />
      <Image
        src={airbnb}
        alt="Picture of the author"
        width={130}
        height={45}
      />
      <Image
        src={netflix}
        alt="Picture of the author"
        width={130}
        height={45}
      />
      <Image
        src={slack}
        alt="Picture of the author"
        width={130}
        height={45}
      />
      <Image
        src={uber}
        alt="Picture of the author"
        width={130}
        height={45}
      />
    </div>
  )
}

export default CompanyName
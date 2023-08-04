import React from 'react'
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <div id='contact' className={styles.container}>
      <div className={styles.header}>
        <p className={styles.mainHeader}>Let us handle your project, professionally.</p>
        <p className={styles.secondHeader}>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
      </div>
      <div className={styles.inputCont}>
        <input className={styles.inputField} type="email" name="email" id="" placeholder='Your email address' /> <br />
        <input className={styles.inputField} type="name" name="name" id="" placeholder='Your name / company name' /> <br />
        <textarea className={styles.inputField} name="message" id="" cols="30" rows="10" placeholder='Your message'></textarea> <br />
        <button className={styles.button}>Send</button>
      </div>
    </div>
  )
}

export default Contact
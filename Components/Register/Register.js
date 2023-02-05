import Image from 'next/image'
import React from 'react'
import styles from "./Register.module.css"
import logo from "../../images/logos/logo.png"
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.image}
          src={logo}
          alt="Picture of logo"
          width={150}
          height={47}
        />
      </div>
      <div className={styles.loginContainer}>
        <div>
          <h1 className={styles.loginText}>Register</h1>
          <input className={styles.inputField} type="text" placeholder='Enter Your Name' />
          <br />
          <input className={styles.inputField} type="text" placeholder='Enter Your Email' />
          <br />
          <input className={styles.inputField} type="password" placeholder='Enter Your Password' />
          <br />
          <input className={styles.inputField} type="password" placeholder='Confirm Your Password' />
          <br />
          <Link href="/login"><small><b><u>Already Have An Account?</u></b></small></Link>
          <button className={styles.loginBtn}>Register</button>
        </div>
      </div>
    </div>
  )
}

export default Register
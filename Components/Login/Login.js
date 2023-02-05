import Image from 'next/image'
import React from 'react'
import styles from "./Login.module.css"
import logo from "../../images/logos/logo.png"
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';

const Login = () => {
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
          <p className={styles.loginText}>Login With</p>
          <input className={styles.inputField} type="text" placeholder='Enter Your Email' />
          <br />
          <input className={styles.inputField} type="text" placeholder='Enter Your Password' />
          <br />
          <div className={styles.forgotPass}>
            <Link href="/register"><small><b><u>Create An Account?</u></b></small></Link>
            <small><b><u>Forgot Password?</u></b></small>
          </div>
          <br />
          <button className={styles.loginBtn}>Login</button>
          <button className={styles.googleBtn}>< FcGoogle className={styles.icon} /> Continue With Google</button>
        </div>
      </div>
    </div>
  )
}

export default Login
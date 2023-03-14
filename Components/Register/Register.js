import Image from 'next/image'
import React, { useState } from 'react'
import styles from "./Register.module.css"
import logo from "../../images/logos/logo.png"
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.config';
import { Box } from '@mui/system';
import { CircularProgress } from '@mui/material';
import Loading from '../Loading/Loading';

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [passError, setPassError] = useState("");

  const handleRegister = async () => {
    if (confirmPass === password) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
    }
    else {
      setPassError("Password didn't match")
    }
  }


  if (loading || updating) {
    return (
      <Loading></Loading>
    );
  }
  if (user) {
    console.log(user);
    return (
      <div>
        <p>Registered User: {user.user.email}</p>
      </div>
    );
  }

  if (error || updateError || passError) {
    return (
      <div>
        <p>Error: {error?.message || passError}</p>
      </div>
    );
  }



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
        <form onSubmit={() => handleRegister()}>
          <h1 className={styles.loginText}>Register</h1>
          <input className={styles.inputField} type="text" onChange={(e) => setName(e.target.value)} required placeholder='Enter Your Name' />
          <br />
          <input className={styles.inputField} type="email" onChange={(e) => setEmail(e.target.value)} required placeholder='Enter Your Email' />
          <br />
          <input className={styles.inputField} type="password" onChange={(e) => setPassword(e.target.value)} required placeholder='Enter Your Password' />
          <br />
          <input className={styles.inputField} type="password" onChange={(e) => setConfirmPass(e.target.value)} required placeholder='Confirm Your Password' />
          <br />
          <Link href="/login"><small><b><u>Already Have An Account?</u></b></small></Link>
          {/* <input type="submit" >Register</input> */}
          <input className={styles.loginBtn} type="submit" value="Register" />
        </form>
      </div>
    </div>
  )
}

export default Register
import Image from 'next/image'
import React, { useState } from 'react'
import styles from "./Register.module.css"
import logo from "../../images/logos/logo.png"
import Link from 'next/link';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import ErrorModal from '../ErrorModal/ErrorModal';
import { useRouter } from 'next/router';
import axios from 'axios';

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const router = useRouter()

  const [passError, setPassError] = useState("");
  const [open, setOpen] = useState(true);

  const handleRegister = async (e) => {
    setOpen(true);
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPass = e.target.confirmPassword.value;
    if (confirmPass === password) {
      setPassError("");
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
    router.push('/')
    const data = { name: user.user.displayName, email: user.user.email }
    axios.post(`http://localhost:5000/addUser`, data)
      .then(res => {
        // handle success
        console.log(res.data);
      })
      .catch(err => {
        // handle error
        console.log(err);
      })
  }

  if (error || updateError) {
    if (!passError) {
      console.log(error?.message || updateError?.message);
      setPassError(error?.message || updateError?.message);
    }
    // return (
    //   <div>
    //     <p>Error: {error.message}</p>
    //   </div>
    // );
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
        <form id='form' onSubmit={(e) => handleRegister(e)}>
          <h1 className={styles.loginText}>Register</h1>
          <input className={styles.inputField} type="text" name='name' required placeholder='Enter Your Name' />
          <br />
          <input className={styles.inputField} type="email" name='email' required placeholder='Enter Your Email' />
          <br />
          <input className={styles.inputField} type="password" name='password' required placeholder='Enter Your Password' />
          <br />
          <input className={styles.inputField} type="password" name='confirmPassword' required placeholder='Confirm Your Password' />
          <br />
          <Link href="/login"><small><b><u>Already Have An Account?</u></b></small></Link>
          <input className={styles.loginBtn} type="submit" value="Register" />
        </form>
        {passError ? <ErrorModal open={open} setOpen={setOpen} passError={passError}></ErrorModal> : ""}
      </div>
    </div>
  )
}

export default Register
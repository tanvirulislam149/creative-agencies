import Image from 'next/image'
import React, { useState } from 'react'
import styles from "./Login.module.css"
import logo from "../../images/logos/logo.png"
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import ErrorModal from '../ErrorModal/ErrorModal';
import { useRouter } from 'next/router';
import axios from 'axios';
import { usePreviousUrl } from '../../pages/_app';

const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();
  const previousURL = usePreviousUrl();
  console.log(previousURL);

  const [passError, setPassError] = useState("");
  const [open, setOpen] = useState(true);

  const handleSignIn = (e) => {
    setOpen(true);
    setPassError("");
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  }

  const handleGoogleSignIn = () => {
    setOpen(true);
    setPassError("");
    signInWithGoogle();
  }

  if (googleLoading || loading) {
    return (
      <Loading></Loading>
    );
  }

  if (googleError || error) {
    console.log(googleError || error);
    passError ? "" : setPassError(googleError?.message || error?.message);
  }

  if (user) {
    router.push(previousURL.previous);
  }

  if (googleUser) {
    router.push(previousURL.previous);
    const data = { name: googleUser.user.displayName, email: googleUser.user.email }
    axios.post(`http://localhost:5000/addUser`, data)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
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
        <form onSubmit={(e) => handleSignIn(e)}>
          <p className={styles.loginText}>Login With</p>
          <input className={styles.inputField} type="email" name='email' required placeholder='Enter Your Email' />
          <br />
          <input className={styles.inputField} type="password" name='password' required placeholder='Enter Your Password' />
          <br />
          <div className={styles.forgotPass}>
            <Link href="/register"><small><b><u>Create An Account?</u></b></small></Link>
            <small><b><u>Forgot Password?</u></b></small>
          </div>
          <br />
          <input className={styles.loginBtn} type="submit" value="Login" />
          <button onClick={() => handleGoogleSignIn()} className={styles.googleBtn}>< FcGoogle className={styles.icon} /> Continue With Google</button>
        </form>
        {passError ? <ErrorModal open={open} setOpen={setOpen} passError={passError}></ErrorModal> : ""}
      </div>
    </div>
  )
}

export default Login
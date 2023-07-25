import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAdmin } from '../Redux/features/Auth/adminSlice';
import { useRouter } from 'next/router';
import Loading from '../Components/Loading/Loading';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const PrivateAdminRoute = ({ children }) => {
  const user = useSelector((state) => state?.user?.user);
  const admin = useSelector(state => state.admin.admin);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!user && !userLoading) {
      router.push('/login')
    }
    else if (user && !admin) {
      axios.get(`http://localhost:5000/isAdmin?email=${user.email}`)
        .then(res => {
          if (res.data) {
            dispatch(getAdmin(res.data));
          }
          else {
            router.push('/')
          }
        })
        .catch(err => {
          console.log(err);
        })
    }
  }, [user])

  return children;

}

export default PrivateAdminRoute
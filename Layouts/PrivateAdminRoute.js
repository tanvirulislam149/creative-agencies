import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAdmin } from '../Redux/features/Auth/adminSlice';
import { useRouter } from 'next/router';
import Loading from '../Components/Loading/Loading';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const PrivateAdminRoute = ({ children }) => {
  // const email = useSelector((state) => state?.user?.user?.email);
  const [user, userLoading, error] = useAuthState(auth);
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!user && !userLoading) {
      router.push('/login')
    }
    else if (user) {
      axios.get(`http://localhost:5000/isAdmin?email=${user.email}`)
        .then(res => {
          // handle success
          if (res.data) {
            setLoading(false)
            setAdmin(true);
            dispatch(getAdmin(res.data));
          }
          else {
            router.push('/')
          }
        })
        .catch(err => {
          // handle error
          console.log(err);
        })
    }
  }, [user])

  if (loading || userLoading) {
    return (
      <Loading></Loading>
    )
  }

  if (admin) {
    return children;
  }

}

export default PrivateAdminRoute
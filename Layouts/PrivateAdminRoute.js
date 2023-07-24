import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAdmin } from '../Redux/features/Auth/adminSlice';
import { useRouter } from 'next/router';
import Loading from '../Components/Loading/Loading';
import axios from 'axios';

const PrivateAdminRoute = ({ children }) => {
  const email = useSelector((state) => state?.user?.user?.email);
  // const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!email) {
      router.push('/login')
    }
    else if (email) {
      axios.get(`http://localhost:5000/isAdmin?email=${email}`)
        .then(res => {
          // handle success
          if (res.data) {
            // setLoading(false)
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
  }, [email])

  // if (loading) {
  //   return (
  //     <Loading></Loading>
  //   )
  // }

  return children;

}

export default PrivateAdminRoute
import React, { useEffect, useState } from 'react'
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import Loading from '../Components/Loading/Loading';
import { useSelector } from 'react-redux';

const PrivateUserRoute = ({ children }) => {
  const user = useSelector((state) => state.user.user);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
    else if (user) {
      setLoading(false)
    }
  }, [user])

  if (loading) {
    return (
      <Loading></Loading>
    )
  }

  return children;
}

export default PrivateUserRoute 
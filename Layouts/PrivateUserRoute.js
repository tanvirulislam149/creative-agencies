import React, { useEffect, useState } from 'react'
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import Loading from '../Components/Loading/Loading';

const PrivateUserRoute = ({ children }) => {
  const [user, userLoading, error] = useAuthState(auth);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (!user && !userLoading) {
      router.push('/login')
    }
    else if (user) {
      setLoading(false)
    }
  }, [user, userLoading])

  if (loading || userLoading) {
    return (
      <Loading></Loading>
    )
  }
  return children;
}

export default PrivateUserRoute 
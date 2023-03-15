import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import DetailsPage from '../../Components/DetailPage/DetailsPage';
import Loading from '../../Components/Loading/Loading';
import auth from '../../firebase.init';

const index = () => {
  const [user, userLoading, error] = useAuthState(auth);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  console.log(user);

  useEffect(() => {
    if (!user && !userLoading) {
      router.push('/login')
      console.log("no user");
    }
    else if (user) {
      console.log("user");
      setLoading(false)
    }
  }, [user, userLoading])

  if (loading || userLoading) {
    return (
      <Loading></Loading>
    )
  }



  return (
    <div style={{ marginTop: "90px" }}>
      <DetailsPage></DetailsPage>
    </div>
  )
}

export default index;
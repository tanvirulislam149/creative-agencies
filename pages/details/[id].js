import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import DetailsPage from '../../Components/DetailPage/DetailsPage';
import Loading from '../../Components/Loading/Loading';
import auth from '../../firebase.init';
import NavbarLayout from '../../Layouts/NavbarLayout';
import PrivateUserRoute from '../../Layouts/PrivateUserRoute';

const index = () => {
  // const [user, userLoading, error] = useAuthState(auth);
  // const [loading, setLoading] = useState(true);

  // const router = useRouter();

  // useEffect(() => {
  //   if (!user && !userLoading) {
  //     router.push('/login')
  //   }
  //   else if (user) {
  //     setLoading(false)
  //   }
  // }, [user, userLoading])

  // if (loading || userLoading) {
  //   return (
  //     <Loading></Loading>
  //   )
  // }



  return (
    <PrivateUserRoute>
      <NavbarLayout>
        <DetailsPage />
      </NavbarLayout>
    </PrivateUserRoute>
  )
}

export default index;
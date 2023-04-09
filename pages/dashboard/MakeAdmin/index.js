import React, { useEffect, useState } from 'react'
import MakeAdminPage from '../../../Components/MakeAdminPage/MakeAdminPage'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useRouter } from 'next/router';
import Loading from '../../../Components/Loading/Loading';
import axios from 'axios';

const MakeAdmin = () => {

  const [user, userLoading, error] = useAuthState(auth);
  const [loading, setLoading] = useState(true);

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
  }, [user, userLoading])

  if (loading || userLoading) {
    return (
      <Loading></Loading>
    )
  }




  return (
    <div>
      <MakeAdminPage />
    </div>
  )
}

export default MakeAdmin
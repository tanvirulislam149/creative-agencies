import React, { useEffect, useState } from 'react'
import ServiceList from '../../../Components/ServiceList/ServiceList'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useRouter } from 'next/router';
import axios from 'axios';
import Loading from '../../../Components/Loading/Loading';

const ServiceListPage = () => {

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
      <ServiceList />
    </div>
  )
}

export default ServiceListPage
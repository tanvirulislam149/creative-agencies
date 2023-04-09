import React, { useEffect, useState } from 'react'
import AddCoursePage from "../../../Components/AddCoursePage/AddCoursePage"
import Loading from '../../../Components/Loading/Loading';
import auth from '../../../firebase.init';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';

const AddCourse = () => {
  const [user, userLoading, error] = useAuthState(auth);
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

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
      <AddCoursePage admin={admin}></AddCoursePage>
    </div>
  )
}

export default AddCourse
import React, { useEffect, useState } from 'react'
import AddCoursePage from "../../../Components/AddCoursePage/AddCoursePage"
import Loading from '../../../Components/Loading/Loading';
import auth from '../../../firebase.init';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAdmin } from '../../../Redux/features/Auth/adminSlice';
import Navbar from '../../../Components/Navbar/Navbar';
import PrivateAdminRoute from '../../../Layouts/PrivateAdminRoute';
import PrivateUserRoute from '../../../Layouts/PrivateUserRoute';
import DashboardLayout from '../../../Layouts/DashboardLayout';

const AddCourse = () => {

  return (
    <div>
      <PrivateUserRoute>
        <PrivateAdminRoute>
          <DashboardLayout>
            <AddCoursePage />
          </DashboardLayout>
        </PrivateAdminRoute>
      </PrivateUserRoute>
    </div>
  )
}

export default AddCourse
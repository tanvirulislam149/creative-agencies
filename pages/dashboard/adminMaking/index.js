import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useRouter } from 'next/router';
import Loading from '../../../Components/Loading/Loading';
import axios from 'axios';
import PrivateUserRoute from '../../../Layouts/PrivateUserRoute';
import PrivateAdminRoute from '../../../Layouts/PrivateAdminRoute';
import DashboardLayout from '../../../Layouts/DashboardLayout';
import NavbarLayout from '../../../Layouts/NavbarLayout';
import MakeAdminPage from '../../../Components/MakeAdminPage/MakeAdminPage';

const MakeAdmin = () => {
  return (
    <div>
      {/* <NavbarLayout> */}
      {/* <PrivateUserRoute>
        <PrivateAdminRoute> */}
      <DashboardLayout>
        <MakeAdminPage />
      </DashboardLayout>
      {/* </PrivateAdminRoute>
      </PrivateUserRoute> */}
      {/* </NavbarLayout> */}
    </div>
  )
}

export default MakeAdmin
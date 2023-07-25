import React, { useEffect, useState } from 'react'
import ServiceList from '../../../Components/ServiceList/ServiceList'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useRouter } from 'next/router';
import axios from 'axios';
import Loading from '../../../Components/Loading/Loading';
import PrivateUserRoute from '../../../Layouts/PrivateUserRoute';
import PrivateAdminRoute from '../../../Layouts/PrivateAdminRoute';
import DashboardLayout from '../../../Layouts/DashboardLayout';
import NavbarLayout from '../../../Layouts/NavbarLayout';

const ServiceListPage = () => {
  return (
    <div>
      {/* <NavbarLayout> */}
      <PrivateUserRoute>
        <PrivateAdminRoute>
          <DashboardLayout>
            <ServiceList />
          </DashboardLayout>
        </PrivateAdminRoute>
      </PrivateUserRoute>
      {/* </NavbarLayout> */}
    </div>
  )
}

export default ServiceListPage
import React from 'react'
import PrivateAdminRoute from '../../../Layouts/PrivateAdminRoute';
import PrivateUserRoute from '../../../Layouts/PrivateUserRoute';
import DashboardLayout from '../../../Layouts/DashboardLayout';
import AddService from '../../../Components/AddCoursePage/AddCoursePage';
import NavbarLayout from '../../../Layouts/NavbarLayout';

const AddCourse = () => {

  return (
    <div>
      {/* <NavbarLayout> */}
      {/* <PrivateUserRoute>
        <PrivateAdminRoute> */}
      <DashboardLayout>
        <AddService />
      </DashboardLayout>
      {/* </PrivateAdminRoute>
      </PrivateUserRoute> */}
      {/* </NavbarLayout> */}
    </div>
  )
}

export default AddCourse
import React from 'react'
import PrivateAdminRoute from '../../../Layouts/PrivateAdminRoute';
import PrivateUserRoute from '../../../Layouts/PrivateUserRoute';
import DashboardLayout from '../../../Layouts/DashboardLayout';
import AddService from '../../../Components/AddCoursePage/AddCoursePage';

const AddCourse = () => {

  return (
    <div>
      <PrivateUserRoute>
        <PrivateAdminRoute>
          <DashboardLayout>
            <AddService />
          </DashboardLayout>
        </PrivateAdminRoute>
      </PrivateUserRoute>
    </div>
  )
}

export default AddCourse
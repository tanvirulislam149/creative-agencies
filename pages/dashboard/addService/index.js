import React from 'react'
import PrivateAdminRoute from '../../../Layouts/PrivateAdminRoute';
import PrivateUserRoute from '../../../Layouts/PrivateUserRoute';
import DashboardLayout from '../../../Layouts/DashboardLayout';
import AddService from '../../../Components/AddCoursePage/AddCoursePage';

const AddCourse = () => {

  return (
    <div>
      <DashboardLayout>
        <PrivateUserRoute>
          <PrivateAdminRoute>
            <AddService />
          </PrivateAdminRoute>
        </PrivateUserRoute>
      </DashboardLayout>
    </div>
  )
}

export default AddCourse
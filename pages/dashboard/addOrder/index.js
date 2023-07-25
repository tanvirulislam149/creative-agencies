import React from 'react'
import MyProfile from '../../../Components/MyProfile/MyProfile'
import PrivateUserRoute from '../../../Layouts/PrivateUserRoute'
import DashboardLayout from '../../../Layouts/DashboardLayout'

const myProfile = () => {
  return (
    <div>
      <PrivateUserRoute>
        <DashboardLayout>
          <MyProfile />
        </DashboardLayout>
      </PrivateUserRoute>
    </div>
  )
}

export default myProfile
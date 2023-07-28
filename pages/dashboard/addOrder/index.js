import React from 'react'
import AddOrder from '../../../Components/AddOrder/AddOrder'
import PrivateUserRoute from '../../../Layouts/PrivateUserRoute'
import DashboardLayout from '../../../Layouts/DashboardLayout'

const myProfile = () => {
  return (
    <div>
      <PrivateUserRoute>
        <DashboardLayout>
          <AddOrder />
        </DashboardLayout>
      </PrivateUserRoute>
    </div>
  )
}

export default myProfile
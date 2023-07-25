import React from 'react'
import MyOrders from '../../../Components/MyOrders/MyOrders'
import PrivateUserRoute from '../../../Layouts/PrivateUserRoute'
import DashboardLayout from '../../../Layouts/DashboardLayout'

const myOrders = () => {
  return (
    <div>
      <PrivateUserRoute>
        <DashboardLayout>
          <MyOrders />
        </DashboardLayout>
      </PrivateUserRoute>
    </div>
  )
}

export default myOrders
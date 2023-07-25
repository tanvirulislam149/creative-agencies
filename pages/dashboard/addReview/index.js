import React from 'react'
import AddReview from '../../../Components/AddReview/AddReview'
import PrivateUserRoute from '../../../Layouts/PrivateUserRoute'
import DashboardLayout from '../../../Layouts/DashboardLayout'

const addReview = () => {
  return (
    <div>
      <PrivateUserRoute>
        <DashboardLayout>
          <AddReview />
        </DashboardLayout>
      </PrivateUserRoute>
    </div>
  )
}

export default addReview
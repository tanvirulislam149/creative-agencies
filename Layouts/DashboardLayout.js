import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import SideNav from '../Components/SideNav/SideNav'

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div style={{ display: "flex" }}>
        <div>
          <SideNav></SideNav>
        </div>
        <div style={{ width: "100%" }}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
import React from 'react'
import SideNav from '../Components/SideNav/SideNav'
import NavbarLayout from "./NavbarLayout"

const DashboardLayout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <SideNav></SideNav>
      </div>
      <div style={{ width: "100%" }}>
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
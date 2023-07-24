import React from 'react'
import SideNav from '../Components/SideNav/SideNav'
import NavbarLayout from "./NavbarLayout"

const DashboardLayout = ({ children }) => {
  return (
    <NavbarLayout>
      <div style={{ display: "flex" }}>
        <div>
          <SideNav></SideNav>
        </div>
        <div style={{ width: "100%" }}>
          {children}
        </div>
      </div>
    </NavbarLayout>
  )
}

export default DashboardLayout
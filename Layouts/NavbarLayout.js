import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

const NavbarLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "90px" }}>
        {children}
      </div>
    </div>
  )
}

export default NavbarLayout
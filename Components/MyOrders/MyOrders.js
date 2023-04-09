import React from 'react'
import styles from "./MyOrders.module.css"
import { Box, Toolbar } from '@mui/material'
import SideNav from '../SideNav/SideNav'

const drawerWidth = 200;

const MyOrders = () => {
  return (
    <Box className={styles.boxContainer} sx={{ display: 'flex' }}>
      <SideNav></SideNav>
      <Box
        className={styles.boxContent}
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <div>
          <h1 className={styles.myOrders}>My orders</h1>
        </div>
      </Box>
    </Box>
  )
}

export default MyOrders
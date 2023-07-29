import React from 'react'
import styles from "./MyOrders.module.css"
import { Box, Toolbar } from '@mui/material'
import SideNav from '../SideNav/SideNav'

const drawerWidth = 200;

const MyOrders = () => {
  return (
    <Box className={styles.boxContainer} sx={{ display: 'flex' }}>
      <Box
        className={styles.boxContent}
        component="main"
        sx={{ flexGrow: 1, p: 0, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <div>
          <p className={styles.myOrders}>Service List</p>
          <div className={styles.orderCardCont}>
            <div className={styles.card}>
              <div className={styles.imgCont}>
                <img className={styles.icon} src="https://i.ibb.co/D7msbHw/aboutme.jpg" alt="" />
                <div className={styles.onGoingStatus}>
                  <p>On going</p>
                </div>
              </div>
              <p className={styles.title}>Web & Mobile design</p>
              <p className={styles.description}>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.imgCont}>
                <img className={styles.icon} src="https://i.ibb.co/D7msbHw/aboutme.jpg" alt="" />
                <div className={styles.pendingStatus}>
                  <p>Pending</p>
                </div>
              </div>
              <p className={styles.title}>Web & Mobile design</p>
              <p className={styles.description}>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.imgCont}>
                <img className={styles.icon} src="https://i.ibb.co/D7msbHw/aboutme.jpg" alt="" />
                <div className={styles.doneStatus}>
                  <p>Done</p>
                </div>
              </div>
              <p className={styles.title}>Web & Mobile design</p>
              <p className={styles.description}>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  )
}

export default MyOrders
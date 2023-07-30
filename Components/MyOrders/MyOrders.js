import React from 'react'
import styles from "./MyOrders.module.css"
import { Box, Toolbar } from '@mui/material'
import SideNav from '../SideNav/SideNav'
import { useGetMyCoursesQuery } from '../../Redux/Services/orders';
import { useSelector } from 'react-redux';
import Loading from "../Loading/Loading"

const drawerWidth = 200;

const MyOrders = () => {
  const userEmail = useSelector(state => state.user.user.email);
  const { data, error, isLoading } = useGetMyCoursesQuery(userEmail);
  console.log(data);
  if (isLoading) {
    return <Loading />
  }

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
            {
              data.length ? data.map(d =>
                <div key={d._id}>
                  <div className={styles.card}>
                    <div className={styles.imgCont}>
                      <img className={styles.icon} src={d.serviceImg} alt="" />
                      <div className={d.status === "pending" ? styles.pendingStatus : d.status === "onGoing" ? styles.onGoingStatus : styles.doneStatus}>
                        <p>{d.status === "pending" ? "Pending" : d.status === "onGoing" ? "On going" : "Done"}</p>
                      </div>
                    </div>
                    <p className={styles.title}>{d.service}</p>
                    <p className={styles.description}>{d.serviceDescription}</p>
                  </div>
                </div>
              ) : <p>No orders found.</p>
            }
          </div>
        </div>
      </Box>
    </Box>
  )
}

export default MyOrders
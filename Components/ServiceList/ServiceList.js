import { Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import SideNav from '../SideNav/SideNav';
import styles from "./ServiceList.module.css"

const drawerWidth = 200;

const ServiceList = () => {
  return (
    <Box className={styles.boxContainer} sx={{ display: 'flex' }}>
      <Box
        className={styles.boxContent}
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        {/* <Toolbar /> */}
        <p className={styles.header}>All Orders List</p>
        <div className={styles.listContainer}>
          <table className={styles.tableCont}>
            <thead className={styles.tableHeaderCont}>
              <tr>
                <th className={`${styles.tableHeader} ${styles.firstHeader}`}>Name</th>
                <th className={styles.tableHeader}>Email Id</th>
                <th className={styles.tableHeader}>Service</th>
                <th className={styles.tableHeader}>Project Details</th>
                <th className={`${styles.tableHeader} ${styles.lastHeader}`}>Status</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>Germany</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
                <td>Mexico</td>
                <td>Mexico</td>
              </tr>
              <tr>
                <td>Ernst Handel</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
                <td>Austria</td>
                <td>Austria</td>
              </tr>
              <tr>
                <td>Island Trading</td>
                <td>Helen Bennett</td>
                <td>Helen Bennett</td>
                <td>Helen Bennett</td>
                <td>UK</td>
              </tr>
              <tr>
                <td>Laughing Bacchus Winecellars</td>
                <td>Yoshi Tannamuri</td>
                <td>Yoshi Tannamuri</td>
                <td>Yoshi Tannamuri</td>
                <td>Canada</td>
              </tr>
              <tr>
                <td>Magazzini Alimentari Riuniti</td>
                <td>Giovanni Rovelli</td>
                <td>Giovanni Rovelli</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Box>
    </Box>
  )
}

export default ServiceList
import React from 'react'
import styles from "./AddReview.module.css"
import { Box, Toolbar } from '@mui/material'
import SideNav from '../SideNav/SideNav'

const drawerWidth = 200;

const AddReview = () => {
  return (
    <Box className={styles.boxContainer} sx={{ display: 'flex' }}>
      <Box
        className={styles.boxContent}
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <div>
          <h1 className={styles.addReview}>Add Review</h1>
        </div>
      </Box>
    </Box>
  )
}

export default AddReview
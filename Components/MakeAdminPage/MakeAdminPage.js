import { Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import SideNav from '../SideNav/SideNav'
import styles from "./MakeAdminPage.module.css"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios'

const drawerWidth = 200;

const MakeAdminPage = () => {



  return (
    <div>
      <Box className={styles.boxContainer} sx={{ display: 'flex' }}>
        <SideNav></SideNav>
        <Box
          className={styles.boxContent}
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          <p className={styles.makeAdmin}>Make Admin</p>
          <div className={styles.formContainer}>
            <p className={styles.email}>Email</p>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={options}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Select Email" />}
            />
          </div>
        </Box>
      </Box>
    </div>
  )
}

const options = ['The Godfather', 'Pulp Fiction'];

export default MakeAdminPage
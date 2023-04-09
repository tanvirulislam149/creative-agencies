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
  const [user, setUser] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);


  useEffect(() => {
    axios.get(`http://localhost:5000/users`)
      .then(res => {
        // handle success
        setUser(res.data)
      })
      .catch(err => {
        // handle error
        console.log(err);
      })
  }, [])

  const handleSubmit = () => {
    axios.patch(`http://localhost:5000/makeAdmin`, { email: selectedUser })
      .then(res => {
        // handle success
        console.log(res);
        setSelectedUser(null);
      })
      .catch(err => {
        // handle error
        console.log(err);
      })
  }


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
            <div className={styles.inputCont}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                onChange={(event, value) => setSelectedUser(value)}
                value={selectedUser}
                options={user}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Select Email" />}
              />
              <button onClick={handleSubmit} className={styles.submitBtn}>Submit</button>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  )
}

export default MakeAdminPage
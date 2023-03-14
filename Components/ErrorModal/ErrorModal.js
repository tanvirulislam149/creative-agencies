import { Button, Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import styles from "./ErrorModal.module.css"
import { MdError } from "react-icons/md";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#fbd062',
  border: '2px solid #fbd062',
  boxShadow: 24,
  p: 4,
  textAlign: "center"
};

const ErrorModal = ({ open, setOpen, passError }) => {

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <MdError className={styles.icon} />
            <h2 className={styles.heading}>{passError}</h2>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default ErrorModal
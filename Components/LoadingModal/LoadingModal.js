import React, { useState } from 'react'
import styles from "./LoadingModal.module.css"
import { Box, CircularProgress, Modal, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '',
  border: 0,
  boxShadow: 0,
  p: 4,
};

const LoadingModal = ({ loadingModal }) => {
  return (
    <div>
      <Modal
        open={loadingModal}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CircularProgress
            sx={{
              color: "#fbd062",
              animationDuration: '2000ms',
              position: 'absolute',
              left: "50%",
              top: "50%"
            }}
            size={50}
            thickness={8}
          />
        </Box>
      </Modal>
    </div>
  )
}

export default LoadingModal
import React from 'react'
import styles from "./SuccessModal.module.css"
import { Box, CircularProgress, Modal, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#fbd062',
  border: 0,
  boxShadow: 20,
  p: 4,
  textAlign: "center"
};

const SuccessModal = ({ successMessage, successModalOpen, setSuccessModalOpen }) => {
  const handleClose = () => {
    setSuccessModalOpen(false);
  }
  return (
    <div>
      <Modal
        open={successModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>{successMessage}</h1>
        </Box>
      </Modal>
    </div>
  )
}

export default SuccessModal
import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styles from "./Loading.module.css"

const Loading = () => {
  return (
    <div>
      <Box>
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
    </div>
  )
}

export default Loading
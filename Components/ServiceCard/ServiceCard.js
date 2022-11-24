import React from 'react'
import styles from "./ServiceCard.module.css"
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import Image from 'next/image';


const ServiceCard = ({ data }) => {
  const { name, img, des } = data;
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={img} alt="graphic-Des" />
      </div>
      <p className={styles.cardTitle}>{name}</p>
      <p className={styles.cardText}>{des}</p>
    </div>
  )
}

export default ServiceCard
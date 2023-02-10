import React from 'react'
import styles from "./index.module.css";
import CircularProgress from '@mui/material/CircularProgress';

const index = () => {
  return (
    <div className={styles.loading}>
      <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="ロゴ画像" />
      <CircularProgress />
    </div>
  )
}

export default index

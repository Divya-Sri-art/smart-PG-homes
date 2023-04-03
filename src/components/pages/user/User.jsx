import React from 'react'
import Layout from '../../../utils/layout'
import styles from './User.module.css'

const User = () => {
  return (
    <div className={styles.AppGlass}>
      <div><Layout /></div>
    <div className={styles.container}>
        <h1>Smart Homes</h1>
        <p>User</p>
    </div>
  </div>
  
  )
}

export default User
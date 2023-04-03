import React from 'react'
import styles from './Home.module.css'

const Home = (props) => {
  return (
    <div className={styles.home} id="home">
        <h1>Choose Your Comfortable PG Hostels For Better Living</h1>
        <p>Let's find a cozy accommodation for you!</p>
        <div className={styles.btn}>
        <button className={styles.btn1} onClick={()=>{props.setClick(true)}}>Enquiry Form</button>
        <button className={styles.btn2}>Watch Demo</button>
        </div>
    </div>
  )
}

export default Home
import React from 'react'
import styles from './Features.module.css'

const Features = () => {
  return (
    <>
    <div className={styles.main} id="features">
      <h2>Some of the features</h2>
      <p style={{marginTop:".5rem"}}>Checkout what you can do with Smart PG Homes. Here are few of the features, download our android app or signup to find out more.</p>
      <div className={styles.container}>
        <div>
          <div className={styles.error}>
          <div className={styles.images}>
          <img src="./assests/assests7.png" alt="" />
          </div>
          <div className={styles.reports}>
          <h4>Reports</h4>
          <p>All your PG stats and data is just a click away with our detailed reports</p>
          </div>
          </div>
          <div className={styles.error}>
          <div className={styles.images}>
          <img src="./assests/download.image.png" alt="" />
          </div>
          <div className={styles.reports}>
          <h4>Manage Guests</h4>
          <p>Check In and Check Out guests with cloud support!</p>
          </div>
          </div>
          <div className={styles.error}>
          <div className={styles.images}>
          <img src="./assests/assests9.png" alt="" />
          </div>
          <div className={styles.reports}>
          <h4>Smart Rent Collection</h4>
          <p>Collect rent on your preferred day of the month, which can also be configured for each inmate/tenant</p>
          </div>
          </div>
        </div>
        {/* <div className={styles.image}>
          <img src="./assests/assest5.png" alt="" />
        </div> */}
        <div>
        <div className={styles.error}>
          <div className={styles.images}>
          <img src="./assests/assests10.png" alt="" />
          </div>
          <div className={styles.reports}> 
          <h4>Manage PGs, Hostels and Apartments</h4>
          <p>Whether you run your PG in rooms, hostel or apartments, we've got you covered</p>
          </div>
          </div>
          <div className={styles.error}>
          <div className={styles.images}>
          <img src="./assests/assests11.png" alt="" />
          </div>
          <div className={styles.reports}>
          <h4>Manage Staff</h4>
          <p>Add/Remove PG staff or better, add Managers to manage your PGs for you!</p>
          </div>
          </div>
          <div className={styles.error}>
          <div className={styles.images}>
          <img src="./assests/assests12.png" alt=""  />
          </div>
          <div className={styles.reports}>
          <h4>Beds Availability</h4>
          <p>Track your PG's bed availability efficiently, hassle-free</p>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.container1}>
      <div className={styles.text}>
        <h2>Smart PG is available for all devices download now</h2>
        <p>download our android and ios app and find out more services that we offer.</p>
        <button>GET IT ON <span className={styles.alt}>GOOGLE PAY </span></button>
        <button>GET IT ON  <span className={styles.alt}>APP STORE</span></button>
      </div>
      <div>
        <img src="./assests/assest6.png" alt="" />
      </div>
    </div>
    </>
  )
}

export default Features
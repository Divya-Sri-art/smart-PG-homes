import React from 'react'
import styles from './ContactUs.module.css'

const ContactUs = () => {
  return (

        <div className={styles.container1} id="contactus">
        <h2>Contact us</h2>
        <div className={styles["form-control"]}>
        <form>
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="number" name="number" placeholder="Phone No" />
            <input type="text" name="message" placeholder="Message" />
            <input className={styles.btn} type="submit" value="submit"/>
        </form>
        </div>
    </div>
   
  )
}

export default ContactUs
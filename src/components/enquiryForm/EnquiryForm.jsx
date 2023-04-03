import React from 'react'
import styles from './EnquiryForm.module.css'
import { AiOutlineClose } from 'react-icons/ai'

const EnquiryForm = (props) => {
  return (
    <div className={styles["Container"]}>
    <div className={styles["sub-wrapper"]}>
        <h2>Make An Enquiry</h2>
        <form>
            <input type="text" name="name" placeholder="Enter Name" />
            <input type="email" name="email" placeholder="Enter Email Address" />
            <input type="number" name="number" maxlength="10" placeholder="Enter Mobile Number" />
            <input type="text" name="description" placeholder="Get Us A Brief Description Of What You Are Looking For" />
            <input type="submit"  placeholder="Send Enquiry" style={{backgroundColor: "orange" , border: "none" , cursor:"pointer"}} />
        </form>
    </div>
    <button className={styles.icon} onClick={()=>{props.setClick(false)}}>
    <AiOutlineClose />
    </button>
    </div>
  )
}

export default EnquiryForm
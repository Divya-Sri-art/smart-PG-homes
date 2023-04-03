import React from 'react'
import styles from './Modal.module.css'
import { AiOutlineExclamationCircle } from "react-icons/ai"
import { useNavigate } from 'react-router-dom'

const Modal = (props) => {
    const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  }
  return (
    <div className={styles["modal-background"]}>
        <div className={styles["modalContainer"]}>
            <div className={styles.icon}><AiOutlineExclamationCircle /></div>
           
        <div className={styles.title}>
            <h1>Are You sure want to Sign out?</h1>
        </div>
        
        <div className={styles.footer}>
            <button className={styles.btn} onClick={()=>{props.setModal(false)}}>Cancel</button>
            <button className={styles.btn1}  onClick={handleClick}>Logout</button>
        </div>
    </div>
</div>
  )
}

export default Modal


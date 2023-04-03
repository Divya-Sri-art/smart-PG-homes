import React from 'react'
import styles from "./StaffDetails.module.css"
import Layout from '../../utils/layout'
import { FaBullhorn } from 'react-icons/fa'
import { TbBellRinging } from 'react-icons/tb'
import { RiMessageFill} from "react-icons/ri"
import { BsThreeDots, BsTelephoneFill } from "react-icons/bs"

const StaffDetails = () => {
  return (
    <div className={styles.AppGlass}>
        <Layout />
        <div className={styles.text}>
        <div className={styles.change}>
                <h1>SmartPG Home</h1>
                <div className={styles.icon4}>
                    <div className={styles.bull}>
                        <FaBullhorn  />
                    </div>
                    <div className={styles.ring}>
                        <TbBellRinging />
                    </div>
                </div>
            </div>
            <div className={styles.container}>
    
                <div className={styles.name}>
                    <div>
                    <h1>M</h1>
                    </div>
                    <div className={styles.page}>
                        <div>
                        <h2>Munaroh Steffani</h2>
                        <p>Incharge</p>
                        <h4>Staff ID :FT-0001</h4>
                        <p>Date of Join : 1st Jan 2021 </p>
                        </div>
                        <div className={styles["form-control"]}>
                           <button className={styles["form-control-btn"]}>< BsTelephoneFill /></button> 
                            <button className={styles["form-control-btn-btn"]}><RiMessageFill className={styles.icon}/><span className={styles.span}>Send Message</span></button>
                        </div>
                    </div>
                </div>
                <div className={styles.form}>
                    <div>
                    <h3>Phone : <span className={styles.number}>9869869725</span></h3>
                    <h3>Email : <span className={styles.mail}>MunarohSteffani@example.com</span></h3>
                    <h3>Birthday: <span className={styles.date}>24th July</span></h3>
                    <h3>Address: <span className={styles.date}>KPHB Colony, Hyderabad, Telangana</span></h3>
                    <h3>Gender: <span className={styles.date}>Male</span></h3>
                    </div>
                <div className={styles.dots}>
                    <BsThreeDots />
                </div>
                </div>
             </div>
             <div className={styles.divide}>
                <div className={styles.information}>
                    <h1>Personal Informations</h1>
                <div className={styles["personal-info"]}>
                    <div>
                        <p>Passport No.</p>
                        <p>Passport Exp Date.</p>
                        <p>Tel.</p>
                        <p>Nationality</p>
                        <p>Marital status</p>
                    </div>
                    <div>
                        <p>12342233</p>
                        <p>12342233</p>
                        <p>12342233</p>
                        <p>Indian</p>
                        <p>Married</p>
                    </div>
                    </div>
                </div>
                <div className={styles.information}>
                    <h1>Bank Information</h1>
                <div className={styles["personal-info"]}>
                    <div>
                        <p>Bank name</p>
                        <p>bank account No.</p>
                        <p>Ifsc Code</p>
                        <p>PAN No</p>
                    </div>
                    <div>
                        <p>ICICI Bank</p>
                        <p>159843014641</p>
                        <p>ICI24504</p>
                        <p>TC000Y56</p>
                    </div>
                    </div>
                </div>
             </div>
        </div>
    </div>
  )
}

export default StaffDetails
import React,{ useState } from 'react'
import Layout from '../../../utils/layout'
import styles from './ManagePG.module.css'
import { TbBellRinging } from "react-icons/tb"
import { FaBullhorn } from "react-icons/fa"
import { MdCalendarMonth } from "react-icons/md"
import { BsThreeDotsVertical } from "react-icons/bs"

const ManagePG = (props) => {
  // const [isActive, setIsActive] = useState(false);
  const [isSense,setIsSence] = useState(false);
  return (
    <div className={styles.AppGlass}>
      <div><Layout /></div>
     
        <div className={styles.main}>
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
          <div className={styles.major}>
            <button className={styles["form-control"]}>+Add PG</button>
            <div className={styles.container}>
              <div className={styles.text}>
                <div className={styles.image}>
                <img src="./assests/building.png" alt="" />
                <div className={styles.icon1}>
                <h4>SmartPG Homes</h4>
                <div className={styles["dropdown-btn"]} >
                <BsThreeDotsVertical style={{marginTop:"1rem"}} />
                </div>
                {/* {isActive && (
                   <div className={styles["dropdown-content"]}>
                   <button className={styles["dropdown-item"]} >
                     Edit
                   </button>
                   <button className={styles["dropdown-item"]} >
                     Delete
                   </button>
                  </div>
                )} */}
                </div>
                <div className={styles.icon}>
                  <MdCalendarMonth style={{fontSize:"19px"}} />
                <h5>Created on May 7th, 2022</h5>
                </div>
                </div>
                <div className={styles.incharge}>
                  <h3>Incharge :</h3>
                  <p>Munaroh Steffani</p>
                </div>
                <div className={styles.incharge}>
                  <h3>Location:</h3>
                  <p>S R Nagar, Hyderabad</p>
                </div>
              </div>
              <div className={styles.text}>
                <div className={styles.image}>
                <img src="./assests/building1.png" alt=""  />
                <div className={styles.icon1}>
                <h4>SmartPG Homes</h4>
                <div className={styles["dropdown-btn"]} onClick={()=> setIsSence(!isSense)}>
                <BsThreeDotsVertical style={{marginTop:"1rem"}} />
                </div>
                {isSense && (
                   <div className={styles["dropdown-content1"]}>
                   <button className={styles["dropdown-item"]} >
                     Edit
                   </button>
                   <button className={styles["dropdown-item"]} >
                     Delete
                   </button>
                  </div>
                )}
                </div>
                <div className={styles.icon}>
                  <MdCalendarMonth style={{fontSize:"19px"}} />
                <h5>Created on May 7th, 2022</h5>
                </div>
                </div>
                <div className={styles.incharge}>
                  <h3>Incharge :</h3>
                  <p>Narayana</p>
                </div>
                <div className={styles.incharge}>
                  <h3>Location:</h3>
                  <div style={{display:"block"}}>
                  <p>K.P.H.B</p>
                  <p>Colony,Hyderabad</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      
    </div>
  )
}

export default ManagePG
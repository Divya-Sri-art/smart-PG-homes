import React from 'react'
import styles from './Guests.module.css'
import Layout from '../../../utils/layout'
import { TbPhone } from "react-icons/tb"
import { FiMessageSquare} from "react-icons/fi"
import { TbBellRinging } from "react-icons/tb"
import { FaBullhorn } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'

const Guests = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/PersonalInfo");
  }
  const handleEventClick = () => {
    navigate("/guestDetails");
  }
  return (
    <div className={styles.AppGlass}>
      <div>
        <Layout />
      </div>
            
      <div  className={styles.text}>
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
        <div className={styles["parentContainer"]} >
        <div className={styles["form-control"]}>
          <div className={styles.allGuests}>
           <button>All Guests</button>
           <button>Current</button>
           <button>Old</button>
           </div>
           <button className={styles["btn-btn"]} onClick={handleClick} >+New Guest</button>
           
          </div>
          <div className={styles.over}>
            <select >
            <option >All Guests</option>
              <option >Current</option>
              <option >Old</option>
             
            </select>
          </div>
        <div className={styles.container}>
          <table>
            <thead>
            <tr className={styles.head}>
              <th>Name</th>
              <th>Joining Date</th>
              <th>Room Sharing</th>
              <th>Contact</th>
            </tr>
            </thead>
            <tbody  onClick={handleEventClick}>
              <tr>
                <td className={styles.element}>
                  <div className={styles.text1}>
                    <h3 style={{backgroundColor:"#291722"}}>S</h3>
                    <div style={{display:"block"}}>
                      <p style={{color:"black"}}>Sai Ram</p>
                      <p>Room No: 201</p>
                    </div>
                  </div>
                </td>
                <td className={styles.element1}>
                  <p>Joined on Aug 2nd 2022</p>
                </td>
                <td className={styles.element1}>
                  <p>four sharing</p>
                </td>
                <td className={styles.element2}>
                  <button>
                    <TbPhone />
                  </button>
                  <button>
                    <FiMessageSquare />
                  </button>
                </td>
              </tr>
            </tbody>
            <tbody  onClick={handleEventClick}>
              <tr>
                <td className={styles.element}>
                  <div>
                    <h3 style={{backgroundColor:"#6c7207"}}>S</h3>
                    <div style={{display:"block"}}>
                      <p style={{color:"black"}}>Shammer</p>
                      <p>Room No: 201</p>
                    </div>
                  </div>
                </td>
                <td className={styles.element1}>
                  <p>Joined on Aug 2nd 2022</p>
                </td>
                <td className={styles.element1}>
                  <p>four sharing</p>
                </td>
                <td className={styles.element2}>
                  <button>
                    <TbPhone />
                  </button>
                  <button>
                    <FiMessageSquare />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Guests
import React from 'react'
import styles from './Enquiry.module.css'
import Layout from '../../../utils/layout'
import { TbPhone } from "react-icons/tb"
import { FiMessageSquare} from "react-icons/fi"
import { FaBullhorn } from "react-icons/fa"
import { TbBellRinging } from "react-icons/tb"

const Enquiry = () => {
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
          <h3>Enquiries</h3>
        <div className={styles.container}>
          <table>
            <thead>
            <tr className={styles.head}>
              <th>Guest Name</th>
              <th>Joining Date</th>
              <th>Room Sharing</th>
              <th style={{width:"200px"}}>Contact</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.element}>
                  <div className={styles.text1}>
                    <h3 style={{backgroundColor:"#E7A0A9"}}>S</h3>
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
            <tbody>
              <tr>
                <td className={styles.element}>
                  <div className={styles.number}>
                    <h3 style={{backgroundColor:"#3B0876"}}>S</h3>
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

export default Enquiry
import React from 'react'
import styles from "./RoomDetails.module.css"
import Layout from '../../utils/layout'
import { FaBullhorn } from 'react-icons/fa'
import { TbBellRinging } from 'react-icons/tb'
import { BiBed } from "react-icons/bi"
import { IoMdPeople } from "react-icons/io"
import { TbPhone } from "react-icons/tb"
import { FiMessageSquare} from "react-icons/fi"

const RoomDetails = () => {
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
            <div className={styles.main}>
                <div className={styles.number1}>
                    <h1>Room No 1</h1>
                    <p>Room Sharing</p>
                    <div className={styles.sharing} >
                        <div className={styles.four}>
                            <BiBed  className={styles.icon} />
                            <h6>Four Sharing</h6>
                        </div>
                        <div>
                            <button className={styles["form-control"]}>Occupied</button>
                            <button className={styles["form-control-btn"]}><IoMdPeople /></button>
                        </div>
                    </div>
                </div>
                <div className={styles.facilities}>
                    <div>
                        <h2>Facilities</h2>
                    </div>
                    <div>
                        <img src='./assests/ac.png' alt="" />
                        <img src='./assests/fan.png' alt="" />
                        <img src='./assests/table.png' alt="" />
                        <img src='./assests/shower.png' alt="" />
                        <img src='./assests/speaker.png' alt="" />
                    </div>
                </div>
            </div>
            <div className={styles["parentContainer"]} >
          <h4>Guest Details</h4>
        <div className={styles.container}>
          <table>
            <thead>
            <tr className={styles.head}>
              <th>Name</th>
              <th>Joining Date</th>
              <th>Room Sharing</th>
              <th >Contact</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.element}>
                  <div className={styles.text1}>
                    <div  className={styles.letters}>
                    <h3 style={{backgroundColor:"#31B753" , color:"white"}} >S</h3>
                    </div>
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
                    <div className={styles.letters}>
                    <h3 style={{backgroundColor:"#02557A"}}>S</h3>
                    </div>
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

export default RoomDetails
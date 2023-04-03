import React from 'react'
import styles from './Room.module.css'
import Layout from '../../../utils/layout'
import { TbBellRinging } from "react-icons/tb"
import { FaBullhorn } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'

const Room = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/roomDetails");
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
        <div className={styles.container}>
        <div className={styles["form-control"]}>
          <div className={styles["form-control-1"]}>
           <button>All Rooms</button>
           <button>Available Rooms</button>
           <button>Occupied Rooms</button>
           </div>
           <button className={styles["btn-btn"]}>+Add Rooms</button>
           
          </div>
          <div className={styles.over}>
            <select >
            <option >All Rooms</option>
              <option >Available Rooms</option>
              <option >Occupied Rooms</option>
             
            </select>
          </div>
          <div className={styles.table}>
          <table >
            <thead>
            <tr className={styles.head}>
              <th>Room Name</th>
              <th>Room Sharing</th>
              <th>Room Sharing</th>
              <th>Facility</th>
              <th>Prices</th>
              <th>Status</th>
            </tr>
            </thead>
            <tbody onClick={handleClick}>
              <tr>
                <td className={styles.element}>
                  <div className={styles.text1}>
                    <p className={styles.page}>Room No 101</p>
                    <p>Deluxe 1-101</p>
                  </div>
                </td>
                <td className={styles.element1}>
                  <p>Single Sharing</p>
                </td>
                <td className={styles.element2}>
                  <p>Floor A-1</p>
                </td>
                <td className={styles.element3}>
                 <p>AC,Shower,LED TV,Wifi</p>
                </td>
                <td>
                  <p>₹ 12000</p>
                </td>
                <td>
                  <button className={styles.available}>Available</button>
                </td>
              </tr>
            </tbody>
            <tbody onClick={handleClick}>
              <tr>
                <td className={styles.element}>
                  <div className={styles.text1}>
                    <p className={styles.page}>Room No 101</p>
                    <p>Deluxe 1-101</p>
                  </div>
                </td>
                <td className={styles.element1}>
                  <p>Single Sharing</p>
                </td>
                <td className={styles.element2}>
                  <p>Floor A-1</p>
                </td>
                <td className={styles.element3}>
                 <p>AC,Shower,LED TV,Wifi</p>
                </td>
                <td>
                  <p>₹ 12000</p>
                </td>
                <td>
                  <button className={styles.occupied}>Occupied</button>
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

export default Room
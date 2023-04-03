import React from 'react'
import Layout from '../../../utils/layout'
import styles from './FoodMenu.module.css'
import { TbBellRinging } from "react-icons/tb"
import { FaBullhorn } from "react-icons/fa"
import { useState } from 'react'



const FoodMenu = () => {
  const [isActive,setIsActive] = useState("")
// setIsActive((prev)=>!prev)
  return (
    <div className={styles.AppGlass}>
        <Layout />
      <div className={styles.text}>
      <div className={styles.change}>
          <h1>SmartPG Homes</h1>
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
          <div className={styles.menu}>
            <h2>Food Menu</h2>
              <input type="date" />
            <button>+ Add menu</button>
          </div>
          <div className={styles["food_menu"]}>
            <div className={styles["food_arrow"]}></div>
            <div className={styles["food_menu1"]}>
              <div className={styles["food_timing"]}>
                <p>07:00AM -09:00AM</p>
                <button onClick={(e) => setIsActive('breakfast')} ></button>
                 {isActive==="breakfast" && (
                  <div className={styles["mobile_menu1"]} style={{border:"1px solid black", padding:"1rem"}}>
                  <h3>Breakfast<span>(07:00AM -09:00AM)</span></h3>
                  <ul>
                    <li>cereals</li>
                    <li>Masala Dosa</li>
                    <li>Upma</li>
                  </ul>
                </div>
                 )}
              </div>
            </div>
            <div className={styles["food_menu2"]}>
              <div className={styles["food_timing"]}>
                <p>01:00PM -03:00PM</p>
                <button onClick={(e) => setIsActive('lunch')} ></button>
                 {isActive==="lunch" && (
                  <div className={styles["mobile_menu1"]} style={{border:"1px solid black", padding:"1rem"}}>
                  <h3>Lunch<span>(01:00PM -03:00PM)</span></h3>
                  <ul>
                    <li>cereals</li>
                    <li>Masala Dosa</li>
                    <li>Upma</li>
                  </ul>
                </div>
                 )}
               
              </div>
            </div>
            <div className={styles["food_menu3"]}>
              <div className={styles["food_timing"]}>
                <p>08:00PM -10:00PM</p>
                <button onClick={(e) => setIsActive('dinner')} ></button>
                 {isActive==="dinner" && (
                  <div className={styles["mobile_menu1"]} style={{border:"1px solid black", padding:"1rem"}}>
                  <h3>Dinner<span>(08:00PM -10:00PM)</span></h3>
                  <ul>
                    <li>cereals</li>
                    <li>Masala Dosa</li>
                    <li>Upma</li>
                  </ul>
                </div>
                 )}
              </div>
            </div>
          </div>
          <div className={styles["food_mobile_menu"]}>
            <div className={styles["mobile_menu1"]} style={{backgroundColor:"#FFD687"}}>
              <h3>Breakfast<span>(07:00AM -09:00AM)</span></h3>
              <ul>
                <li>cereals</li>
                <li>Masala Dosa</li>
                <li>Upma</li>
              </ul>
            </div>
            <div className={styles["mobile_menu1"]} style={{backgroundColor:"#ff9393"}}>
              <h3>Lunch<span>(01:00PM -03:00PM)</span></h3>
              <ul>
                <li>cereals</li>
                <li>Masala Dosa</li>
                <li>Upma</li>
              </ul>
            </div>
            <div className={styles["mobile_menu1"]} style={{backgroundColor:"pink"}}>
              <h3>Dinner<span>(08:00PM -10:00PM)</span></h3>
              <ul>
                <li>cereals</li>
                <li>Masala Dosa</li>
                <li>Upma</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default FoodMenu
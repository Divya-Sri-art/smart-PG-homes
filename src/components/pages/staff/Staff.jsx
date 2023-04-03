import React from 'react'
import styles from './Staff.module.css'
import Layout from '../../../utils/layout'
import { TbPhone } from "react-icons/tb"
import { TbBellRinging } from "react-icons/tb"
import { FaBullhorn } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'

const Staff = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/basicinfo");
  }
  const handleEventClick = () => {
    navigate("/staffDetails");
  }
  return (
    
  <div className={styles.AppGlass}>
     
        <Layout />
      
            
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
           <button>All Employee</button>
           <button>Active Employee</button>
           <button>Inactive Employee</button>
           </div>
           <button className={styles["btn-btn"]}  onClick={handleClick} >+New Employee</button>
           
          </div>
          <div className={styles.over}>
            <select >
            <option >All Employee</option>
              <option >Active Employee</option>
              <option >Inactive Employee</option>
             
            </select>
          </div>
          <div className={styles.table}>
          <table>
            <thead>
            <tr className={styles.head}>
              <th>Name</th>
              <th>Job Desk</th>
              <th>contact</th>
              <th>Status</th>
            </tr>
            </thead>
            <tbody onClick={handleEventClick}>
              <tr>
                <td className={styles.element}>
                  <div className={styles.text1}>
                    <h3 style={{backgroundColor:"#CCB9BD"}}>S</h3>
                    <div style={{display:"block"}}>
                      <p style={{color:"black", fontWeight:"500"}}>Sai Ram</p>
                      <p style={{color:"orange", fontWeight:"500"}}>#112341225</p>
                      <p>Joined on Aug 2th 2022</p>
                    </div>
                  </div>
                </td>
                <td className={styles.element1}>
                  <p>Answering guest inquiries, directing phone calls, coordinating <span style={{display:"block"}}> travel plans, and more.</span></p>
                </td>
                <td className={styles.element2}>
                  <div  style={{display:"flex", gap:"1rem"}}>
                  <button>
                    <TbPhone />
                  </button>
                  <p>01233455512</p>
                  </div>
                </td>
                <td className={styles.element3}>
                 <p>ACTIVE</p>
                </td>
              </tr>
            </tbody>
            <tbody onClick={handleEventClick}>
              <tr>
                <td className={styles.element}>
                  <div className={styles.text1}>
                    <h3 style={{backgroundColor:"#315F8E"}}>S</h3>
                    <div style={{display:"block"}}>
                      <p style={{color:"black",  fontWeight:"500"}}>Sai Ram</p>
                      <p style={{color:"orange", fontWeight:"500"}}>#12341225</p>
                      <p>Joined on Aug 2th 2022</p>
                    </div>
                  </div>
                </td>
                <td className={styles.element1}>
                  <p>Answering guest inquiries, directing phone calls, coordinating <span style={{display:"block"}}>travel plans, and more.</span></p>
                </td>
                <td className={styles.element2}>
                  <div  style={{display:"flex", gap:"1rem"}}>
                  <button>
                    <TbPhone />
                  </button>
                  <p>01233455512</p>
                  </div>
                </td>
                <td className={styles.element3}>
                 <p>ACTIVE</p>
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

export default Staff
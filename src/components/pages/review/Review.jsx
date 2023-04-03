import React from 'react'
import styles from './Review.module.css'
import Layout from '../../../utils/layout'
import { TbBellRinging } from "react-icons/tb"
import { FaBullhorn } from "react-icons/fa"

const Review = () => {
  return (
    <div className={styles.AppGlass}>
      <div>
        <Layout />
      </div>
      <div  className={styles.text}>
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
         <div className={styles["form-control"]}>
            <button>All Status</button>
            <button>Resolved</button>
            <button>Reopened</button>
          </div> 
          <div className={styles.over}>
            <select >
            <option >All Status</option>
              <option >Resolved</option>
              <option >Reopened</option>
             
            </select>
          </div>
        <div className={styles.container}>
          <table>
            <thead>
            <tr className={styles.head}>
              <th>Guest Name</th>
              <th>Date</th>
              <th>Complaint</th>
              <th>Status</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>James Sitepu</p>
                </td>
                <td>
                  <p>Nov 21st 2022 09:21 AM</p>
                </td>
                <td>
                  <p className={styles.paragraph}>Aut fugiat ipsa dolorum delectus. Numquam dolorum maiores asperiores <span style={{display:"block"}}> assumenda accusamus quisquam eos exercitationem aut. Dolorem ex voluptas</span> omnis laborum illo dolore sed animi ipsum. Ratione dolorum et eos reiciendis illo<span style={{display:"block"}}> facere officia amet unde.</span></p>
                </td>
                <td className={styles.status}>
                  <button>Respond</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
        
    </div>
  )
}

export default Review
import React from 'react'
import styles from "./VendorDetails.module.css"
import Layout from '../../utils/layout'
import { FaBullhorn } from 'react-icons/fa'
import { TbBellRinging } from 'react-icons/tb'
import { RiMessageFill} from "react-icons/ri"
import { BsThreeDots, BsTelephoneFill } from "react-icons/bs"
import { AiOutlineDownload } from "react-icons/ai"

const VendorDetails = () => {
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
            <div className={styles.major}>
            <div className={styles.main}>
            <div className={styles.container}>
              <div className={styles.name}>
                    <div>
                    <h1>M</h1>
                    </div>
                    <div className={styles.page}>
                        <div>
                        <h2>Munaroh Steffani</h2>
                        <h4>Staff ID :FT-0001</h4>
                        </div>
                        <div className={styles["form-control"]}>
                           <button className={styles["form-control-btn"]}>< BsTelephoneFill /></button> 
                            <button className={styles["form-control-btn-btn"]}><RiMessageFill className={styles.icon}/><span className={styles.span}>Send Message</span></button>
                        </div>
                    </div>
              </div>
                <div className={styles.dots}>
                  <BsThreeDots />
                </div>
            </div>
            <div className={styles.thread}>
              <h1>Details</h1>
              <div className={styles.details}>
                    <div>
                        <h1>Company</h1>
                        <h1>Service</h1>
                        <h1>Address</h1>
                        <h1>Email</h1>
                        <h1>Gender</h1>
                    </div>
                    <div>
                        <p>Tirumula Dairy Milk</p>
                        <p>Milk Merchant</p>
                        <p>Hyderabad Kompally</p>
                        <p>TirumulaDairy@email.com</p>
                        <p>Male</p>
                    </div>
                    </div>
            </div>  
             </div>
             <div className={styles.div}>
              <div className={styles.balance}>
               <div className={styles.pay}>
                <div className={styles.icons}>
                <img src="./assests/download.icon.png" alt=" " />
                <div>
                    <h1>8000</h1>
                    <p>Balance</p>
                  </div>
                  </div>
                  <div className={styles.icon5}>
                  <h4>Pay</h4>
                  </div>
               </div>
               <div className={styles.transcation}>
                <div className={styles.numbers}>
                  <h2>150</h2>
                  <p>Total</p>
                  <p>Transactions</p>
                </div>
                <div className={styles.numbers}>
                  <h2>16</h2>
                  <p>Pending</p>
                  <p>Transactions</p>
                </div>
                <div className={styles.numbers}>
                  <h2>134</h2>
                  <p>Receipts</p>
                </div>
               </div>
              </div>
              <div className={styles.amount}>
                <h1>Purchase History</h1>
                <div className={styles.history}>
                  <div className={styles.top}>
                    <h5>Transaction Date</h5>
                    <h4>Nov 2nd, 2022</h4>
                    <h5>9:46 PM</h5>
                  </div>
                  <div>
                    <h3>Amount</h3>
                    <h2>12,000</h2>
                  </div>
                  <div className={styles.separate}>
                    <div className={styles.symbol}>
                  <AiOutlineDownload />
                    <p>Download</p>
                    </div>
                  </div>
                </div>
                <div className={styles.history}>
                  <div className={styles.top}>
                    <h5>Transaction Date</h5>
                    <h4>Nov 2nd, 2022</h4>
                    <h5>9:46 PM</h5>
                  </div>
                  <div>
                    <h3>Amount</h3>
                    <h2>12,000</h2>
                  </div>
                  <div className={styles.separate}>
                    <div className={styles.symbol}>
                  <AiOutlineDownload />
                    <p>Download</p>
                    </div>
                  </div>
                </div>
                <div className={styles.history}>
                  <div className={styles.top}>
                    <h5>Transaction Date</h5>
                    <h4>Nov 2nd, 2022</h4>
                    <h5>9:46 PM</h5>
                  </div>
                  <div>
                    <h3>Amount</h3>
                    <h2>12,000</h2>
                  </div>
                  <div className={styles.separate}>
                    <div className={styles.symbol}>
                  <AiOutlineDownload />
                    <p>Download</p>
                    </div>
                  </div>
                </div>
              </div>
             </div>
             </div>
             <div className={styles.divide}>
              <h1>Transactions</h1>
              <div className={styles.table}>
              <table>
                <thead className={styles.head}>
                  <tr>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>12-12-2022</td>
                    <td className={styles.success}>Success</td>
                    <td>12,000</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>12-12-2022</td>
                    <td className={styles.success}>Success</td>
                    <td>12,000</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td>12-12-2022</td>
                    <td className={styles.success}>Success</td>
                    <td>12,000</td>
                  </tr>
                </tbody>
              </table>
              </div>
             </div>
                
        </div>
    </div>
  )
}

export default VendorDetails
               
                 
                   
               
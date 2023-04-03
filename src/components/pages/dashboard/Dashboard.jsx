import React from 'react'
import Layout from '../../../utils/layout'
import styles from './Dashboard.module.css'
import { BsArrowDownRight , BsFillDoorClosedFill } from "react-icons/bs"
import { HiOutlineClock } from "react-icons/hi"
import { FaBullhorn } from "react-icons/fa"
import { TbBellRinging } from "react-icons/tb"
import { Bar } from "react-chartjs-2"
import { IoIosArrowForward } from "react-icons/io"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
const Dashboard = () => {
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  return (
    <div  className={styles.AppGlass}>
     
        <Layout />
     
    
      <div className={styles.master} >
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
       <div className={styles.master1}>
        
         <div className={styles.main}> 
        <div className={styles.icon}>
          <BsArrowDownRight/>
        </div>
        <div className={styles.text}>
          <h2>Monthly Payment</h2>
          <h3>November,2022</h3>
          <h4>₹ 8,00,000</h4>
        </div>
        </div> 
       <div className={styles.payment}>
     
          <div className={styles.room}>
            <div className={styles.available}>
              <h3>Room Availability</h3>  
              <h4><span style={{fontWeight:"bold"}}> 02 </span>Vacant</h4>
            </div>
            <div className={styles.icon2}>
              <BsFillDoorClosedFill />
            </div>  
          </div>  
     
          <div className={styles.room1}>
            <div className={styles.available1}>
              <h3>Payment Dues</h3>  
              <h4><span style={{fontWeight:"bold"}}> 02 </span>Unpaid</h4>
            </div>
            <div className={styles.icon3}>
              <HiOutlineClock />
            </div>  
          </div>  
        </div>
      </div>
       <div className={styles.divide}>
        
      <div className={styles.activities}>
      
        <h1>Today Activities</h1>
          <div className={styles["form-control"]}>
            <button>Guests</button>
            <button>Guest Payments</button>
            <button>Vendor Payments</button>
          </div>
          <div className={styles.table}>
          <table>
            <tbody>
              <tr>
                <td className={styles.element}>
                  <div className={styles.text3}>
                    <h3 style={{backgroundColor:"#89879F"}}>S</h3>
                    <div style={{display:"block"}}>
                    <p>David</p>
                    <p>Room No 101</p>
                    </div>
                  </div>
                </td>
                <td className={styles.element1}>
                  <p>Check out 19 Dec 2022</p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className={styles.element}>
                  <div className={styles.text3}>
                    <h3 style={{backgroundColor:"#89879F"}}>S</h3>
                    <div style={{display:"block"}}>
                    <p>David</p>
                    <p>Room No 101</p>
                    </div>
                  </div>
                </td>
                <td className={styles.element1}>
                  <p>Check out 19 Dec 2022</p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className={styles.element}>
                  <div className={styles.text3}>
                    <h3 style={{backgroundColor:"#89879F"}}>S</h3>
                    <div style={{display:"block"}}>
                    <p>David</p>
                    <p >Room No 101</p>
                    </div>
                  </div>
                </td>
                <td className={styles.element1}>
                  <p >Check out 19 Dec 2022</p>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
     
      </div>
      <div className={styles.guest}> 
        <h1>New Guest</h1>
        <p>06 Guests</p>
        <div style={{ maxWidth: "280px" }}>
        <Bar
          data={{
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            datasets: [
              {
               
                data: [64, 75, 50, 60],
                
                backgroundColor: ["rgb(250, 149, 0)", "rgb(250, 149, 0)", "rgb(250, 149, 0)", "rgb(250, 149, 0)"]

              },
            ],
          }}
        
          height={200}
          options={{
            maintainAspectRatio: false,
            scales: {
              y: [
                {
                  ticks: {
                    
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 10,
              },
            },
          }}
        />
      </div>
        
      </div>
      <div className={styles.insights}>
        <h2>Insights</h2>
        <h4>Let SmartPG Homes generate monthly Insights</h4>
        <div className={styles.num}>
          <h6>01</h6>
          <p>New Bookings</p>
        </div>
        <div className={styles.num1}>
          <h6>120</h6>
          <p>Active Complaints</p>
        </div>
        <div className={styles.vacancy}>
          <div className={styles.guests1}>
            <h6>150</h6>
            <p>Guests</p>
          </div>
          <div className={styles.guests1}>
            <h6>04</h6>
            <p>Vacancies</p>
          </div >
          <div className={styles.guests1}>
            <h6>98%</h6>
            <p>Occupency</p>
          </div>
        </div>

      </div>
    </div> 
    <div className={styles.major}>
        <h1>Transactions</h1>
    <div className={styles.transactions}>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Bills</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.paid}>
                  <h2 style={{backgroundColor:"#DC070C"}}>R</h2>
                  <div className={styles.span}>
                    <p>Rahul</p>
                    <p>Paid On Sept 26</p>
                  </div>
                </div>
              </td>
              <td className={styles.paids}>
                <p>PAID</p>
              </td>
              <td  className={styles.page}>
                <h3>₹ 8,000</h3>
              </td>
            </tr>
          </tbody>
          <tbody style={{backgroundColor:"#fff3e6"}}>
            <tr>
              <td >
                <div  className={styles.paid}>
                  <h2 style={{backgroundColor:"#E39239"}}>S</h2>
                  <div className={styles.span}>
                    <p>Shankar</p>
                    <p>Paid On Sept 26</p>
                  </div>
                </div>
              </td>
              <td className={styles.paids}>
                <p>PAID</p>
              </td>
              <td  className={styles.page}>
                <h3>₹ 8,000</h3>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>
                <div  className={styles.paid}>
                  <h4 style={{backgroundColor:"#158AE1"}}>M</h4>
                  <div>
                    <p>Murthy</p>
                    <p>Paid On Sept 26</p>
                  </div>
                </div>
              </td>
              <td className={styles.paids}>
                <p>PAID</p>
              </td>
              <td  className={styles.page}>
                <h3>₹ 8,000</h3>
              </td>
            </tr>
          </tbody>
          <tbody style={{backgroundColor:"#fff3e6"}}>
            <tr>
              <td >
                <div  className={styles.paid}>
                  <h2 style={{backgroundColor:"#EA7E8F"}}>K</h2>
                  <div className={styles.span}>
                    <p>Karthik</p>
                    <p>Paid On Sept 26</p>
                  </div>
                </div>
              </td>
              <td className={styles.paids}>
                <p>PAID</p>
              </td>
              <td  className={styles.page}>
                <h3>₹ 8,000</h3>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>
                <div  className={styles.paid}>
                  <h4 style={{backgroundColor:"#1B25D4"}}>N</h4>
                  <div>
                    <p>Nitin</p>
                    <p>Paid On Sept 26</p>
                  </div>
                </div>
              </td>
              <td className={styles.paids}>
                <p>PAID</p>
              </td>
              <td className={styles.page}>
                <h3 >₹ 8,000</h3>
              </td>
            </tr>
          </tbody>
          
        </table>
        </div>
     
      <div className={styles.arrow}>
        <h1>Staff List</h1>
        <div className={styles.staff}>
          <div className={styles.letter}>
          <h2 style={{backgroundColor:"#287CAD"}}>A</h2>
          <p>Abhi Ram</p>
          </div>
          <IoIosArrowForward className={styles.icon8} />
        </div>
        <div className={styles.staff}>
        <div className={styles.letter}>
          <h2  style={{backgroundColor:"#4C2311"}}>A</h2>
          <p>Ajay Kumar</p>
          </div>
          
          <IoIosArrowForward className={styles.icon8} />
        </div>
        <div className={styles.staff}>
        <div className={styles.letter}>
          <h2  style={{backgroundColor:"#EB702D"}}>V</h2>
          <p>Venkat</p>
          </div>
          <IoIosArrowForward className={styles.icon8} />
        </div>
        <div className={styles.staff}>
        <div className={styles.letter}>
          <h2  style={{backgroundColor:"#E3ABEE"}}>B</h2>
          <p>Bhanu</p>
          </div>
          <IoIosArrowForward className={styles.icon8} />
        </div>
        <div className={styles.staff}>
        <div className={styles.letter}>
          <h2  style={{backgroundColor:"#D6329E"}}>B </h2>
          <p>Bhanu</p>
          </div>
         
          <IoIosArrowForward className={styles.icon8} />
        </div>
        <div className={styles.staff}>
        <div className={styles.letter}>
          <h2  style={{backgroundColor:"#A13381"}}>B</h2>
          <p>Bhanu</p>
          </div>
          <IoIosArrowForward className={styles.icon8} />
        </div>
      </div>
     
    </div> 
    </div> 
   
    </div>
   
   


    </div>
  )
}

export default Dashboard
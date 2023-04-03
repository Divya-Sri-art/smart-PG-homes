import React,{useState} from 'react'
import styles from './Invoice.module.css'
import Layout from '../../../utils/layout'
import { FaBullhorn } from "react-icons/fa"
import { TbBellRinging } from "react-icons/tb"


const Invoice = () => {

  const getInitialState = () => {
    const value = "selectDate";
    return value;
  }
  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };


  return (
    <div className={styles.AppGlass}>
      <div>
        <Layout />
      </div>
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
          <div className={styles["drop-down"]}>
            <div className={styles["drop-down-text"]}>
              <select value={value} onChange={handleChange}>
                <option value="selectDate">Select Dates</option>
              </select> 
              <select value={value} onChange={handleChange}>
                <option value="selectDate">Select Status</option>
              </select>
            </div>
              <button>Generate Report</button>
          </div>
         
        <div className={styles.container}>
        <div className={styles.over}>
            <select value={value}>
            <option >All Invoices</option>
              <option >Paid</option>
              <option >Over Due</option>
              <option>Draft</option>
              <option >Recurring</option>
              <option>Cancelled</option>
            </select>
          </div>
          <div className={styles["form-control"]}>
           <button>All Invoices</button>
         
             <button>Paid</button>
             <button>Overdue</button>
             <button>Draft</button>
             <button>Recurring</button>
             <button>Cancelled</button>
             

          
          </div>
          <div className={styles.main}>
          <table>
            <thead>
              <tr className={styles.head}>
                <th>Invoice ID</th>
                <th>Category</th>
                <th>Created On</th>
                <th>Invoice To</th>
                <th>Amount</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td >
                  <p style={{color:"black"}}>IN093439#@11</p>
                </td>
                <td>
                  <p>cable</p>
                </td>
                <td>
                  <p>7 Mar 2022</p>
                </td>
                <td  className={styles.element}>
                  <div>
                    <h3 style={{backgroundColor:"#4DD9BB"}}>R</h3>
                    <p style={{color:"black"}}>Rajesh</p>
                  </div>
                </td>
                <td>
                  <p>$3,470</p>
                </td>
                <td>
                  <p>10 Dec 2022</p>
                </td>
                <td>
                  <button className={styles.cancel}>Cancelled</button>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td >
                  <p style={{color:"black"}}>IN093439#@11</p>
                </td>
                <td>
                  <p>cable</p>
                </td>
                <td>
                  <p>7 Mar 2022</p>
                </td>
                <td  className={styles.element}>
                  <div>
                    <h3 style={{backgroundColor:"#675290"}}>R</h3>
                    <p style={{color:"black"}}>Rajesh</p>
                  </div>
                </td>
                <td>
                  <p>$3,470</p>
                </td>
                <td>
                  <p>10 Dec 2022</p>
                </td>
                <td>
                <button className={styles.paid}>Paid</button>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td >
                  <p style={{color:"black"}}>IN093439#@11</p>
                </td>
                <td>
                  <p>cable</p>
                </td>
                <td>
                  <p>7 Mar 2022</p>
                </td>
                <td  className={styles.element}>
                  <div>
                    <h3 style={{backgroundColor:"#C94C9E"}}>R</h3>
                    <p style={{color:"black"}}>Rajesh</p>
                  </div>
                </td>
                <td>
                  <p>$3,470</p>
                </td>
                <td>
                  <p>10 Dec 2022</p>
                </td>
                <td>
                <button className={styles.due}>OverDue</button>
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

export default Invoice
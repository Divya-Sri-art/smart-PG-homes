import React from 'react';
import 'react-calendar/dist/Calendar.css';
import Layout from '../../../utils/layout'
import styles from './MyRemainders.module.css'
import { TbBellRinging ,TbClockHour3 } from "react-icons/tb"
import { FaBullhorn } from "react-icons/fa"
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { useForm } from "react-hook-form"
import 'react-big-calendar/lib/css/react-big-calendar.css';
const localizer = momentLocalizer(moment)

const MyRemainders = () => {
  const {register} = useForm();
  
 
  const myEventsList = [
    {
      allDay: false,
      end: new Date('March 31, 2023 '),
      start: new Date('april 1, 2023 '),
      title: 'All Day Event very long title  ',
    }
  ];
  
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
        <div className={styles.calender}>
          <div className={styles.title}>
            <form>
              <h1> Calendar</h1>
              <input {...register("title")} className={styles.default} placeholder="title" defaultValue="Title" />
              <div  className={styles.date}>
                <div className={styles.from}>
                  <h6>From Date</h6>
                  <input {...register("date")} type="date" />
                </div>
                <div className={styles.from}>
                  <h6>To Date</h6>
                  <input {...register("date")} type="date" />
                </div>
              </div>
              <div className={styles.icon}>
                <TbClockHour3 className={styles.icon1} />
                <h5>All Day</h5>
              </div>
              <input  {...register("description")} placeholder="Description" className={styles.description} />
              <input type="submit" className={styles["form-control"]} />
            </form>
          </div>
          <div className={styles.overview} >
            <Calendar 
              localizer={localizer}
              events={myEventsList}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyRemainders

   
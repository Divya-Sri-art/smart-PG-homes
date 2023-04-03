// import './Sidebar.module.css';
// import React,{useEffect, useState, useRef} from 'react';
// import { FaThLarge, FaEnvelope, FaBars }from "react-icons/fa"
// import { GiForkKnifeSpoon, GiAlarmClock, GiDoorway}from "react-icons/gi"
// import { TbFileInvoice, TbMessages , TbUser, TbSettings2} from "react-icons/tb"
// import { BsHouse } from "react-icons/bs"
// import { IoMdLogOut } from "react-icons/io"
// import { BiUser, BiBed } from "react-icons/bi"
// import { Link } from 'react-scroll';

// const sidebarNavItems = [
//    {
//     name:('name', 'Dashboard'),
//       path:"/dashboard",
//       icon: <FaThLarge title='Dashboard' />,
//     },
//     {
//       path:"/enquiry",
//       name:"Enquiry",
//       icon:<FaEnvelope title='enquiry' />
//     },
//     {
//      path:"/foodMenu",
//      name:"FoodMenu",
//       icon:<GiForkKnifeSpoon title='foodMenu' />
//     },
//     {
//       path:"/myRemainders",
//       name:"MyRemainders",
//       icon:<GiAlarmClock title='myRemainders' />
//     },
//     {
//       path:"/invoice",
//       name:"Invoice",
//       icon:<TbFileInvoice title='invoice' />
//     },
//     {
//      path:"/review",
//      name:"Review",
//       icon:<TbMessages title='review' />
//     },
//     {
//       path:"/managePG",
//       name:"ManagePG",
//       icon:<BsHouse title='managePG' />
//     },
//     {
//       path:"/staff",
//       name:"Staff",
//       icon:<TbUser title='staff' />
//     },
//     {
//       path:"/room",
//       name:"Room",
//       icon:<BiBed title='room' />
//     },
//     {
//       path:"/user",
//       name:"User",
//       icon:<BiUser title='user' />
//     },
//     {
//       path:"/vendor",
//       name:"Vendor",
//       icon:<GiDoorway title='vendor' />
//     },
//     {
//       path:"/guests",
//       name:"Guests",
//       icon:<BiUser title='guests' />
//     },
//     {
//       path:"/settings",
//       name:"Settings",
//       icon:<TbSettings2 title='settings' />
//     },
//     {
      
//       name:"Logout",
//       icon:<IoMdLogOut title='Logout' />
//     },
  
// ]

// const Sidebar = () => {
//     const [activeIndex, setActiveIndex] = useState(0);
//   const sidebarRef = useRef();
//   const indicatorRef = useRef();

//   useEffect(() => {
//     setTimeout(() => {
//       const sidebarItem = sidebarRef.current.querySelector('.sidebar_menu_item');
//       indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
//     }, 50);
//   }, []);
//   return <div className='sidebar'>
//     <div className="sidebar_logo">
//       <FaBars />
//     </div>
//     <div ref={sidebarRef} className="sidebar_menu">
//       <div ref={indicatorRef} className="sidebar_menu_indicator"></div>
//       {
//         sidebarNavItems.map((item, index) => (
//           <Link to={item.path} key={index}>
//             <div className={`sidebar_menu_item ${activeIndex ===
//               index ? 'active' : '' }`}>
//               <div className="sidebar_menu_item_icon">
//                 {item.icon}
//               </div>
//               <div className="sidebar_menu_item_text">
//                 {item.name}
//               </div>
//             </div>
//           </Link>
//         ))
//       }
//     </div>
//   </div>;
// };
// export default Sidebar;






import React from 'react'
import { FaThLarge, FaEnvelope, FaBars }from "react-icons/fa"
import { GiForkKnifeSpoon, GiAlarmClock, GiDoorway}from "react-icons/gi"
import { TbFileInvoice, TbMessages , TbUser, TbSettings2} from "react-icons/tb"
import { BsHouse } from "react-icons/bs"
import { IoMdLogOut } from "react-icons/io"
import { BiUser, BiBed } from "react-icons/bi"
import styles from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'
import useStore from '../storage'
const Sidebar = (props) => {

  const isOpen=useStore(state=>state.isOpen)
  const setIsOpen=useStore(state=>state.setIsOpen)

  
  const toggle = () => {
    setIsOpen((prev)=>!prev
    )
  }
 
  const menuItem=[
    {
      name:('name', 'Dashboard'),
      path:"/dashboard",
      icon: <FaThLarge title='Dashboard' />,
    },
    {
      path:"/enquiry",
      name:"Enquiry",
      icon:<FaEnvelope title='enquiry' />
    },
    {
     path:"/foodMenu",
      name:"FoodMenu",
      icon:<GiForkKnifeSpoon title='foodMenu' />
    },
    {
      path:"/myRemainders",
      name:"MyRemainders",
      icon:<GiAlarmClock title='myRemainders' />
    },
    {
      path:"/invoice",
      name:"Invoice",
      icon:<TbFileInvoice title='invoice' />
    },
    {
     path:"/review",
      name:"Review",
      icon:<TbMessages title='review' />
    },
    {
      path:"/managePG",
      name:"ManagePG",
      icon:<BsHouse title='managePG' />
    },
    {
      path:"/staff",
      name:"Staff",
      icon:<TbUser title='staff' />
    },
    {
      path:"/room",
      name:"Room",
      icon:<BiBed title='room' />
    },
    {
      path:"/user",
      name:"User",
      icon:<BiUser title='user' />
    },
    {
      path:"/vendor",
      name:"Vendor",
      icon:<GiDoorway title='vendor' />
    },
    {
      path:"/guests",
      name:"Guests",
      icon:<BiUser title='guests' />
    },
    {
      path:"/settings",
      name:"Settings",
      icon:<TbSettings2 title='settings' />
    },
    {
     
      name:"Logout",
      icon:<IoMdLogOut title='Logout' onClick={()=>{props.setModal(true)}} />
    },
  
  ]
  return ( 
    <div className={styles.container}>
      <div style={{width: isOpen ? "200px" : "70px"}} className={styles.sidebar}>
        <div className={styles["top_section"]}>
          <div style={{marginLeft: isOpen ? "135px" : "5px"}} className={styles.bars}>
            <FaBars onClick={toggle} />
          </div>
          
        </div>
        {
          menuItem.map((item, index)=>(
            <NavLink style={({ isActive }) => (isActive ? {color: 'red'} : {color: '#000000'})} to={item.path} key={index} className={styles.link} >
              
              <div className={styles.icon} >
                {item.icon}
                </div>
              <div style={{display: isOpen ? "block" : "none" }} className={styles["link_text"]} >
                {item.name}
              </div>

            </NavLink>
          ))
        }
       
      </div>
 
    </div>
  );
};

export default Sidebar
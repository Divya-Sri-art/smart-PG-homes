import React, {useState} from 'react'
import styles from './Navbar.module.css'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-scroll'

const Navbar = (props) => {
    const [nav, setNav] = useState(false)
    const navHandler=()=>{
      setNav(prev=>!prev)
    }
    const [isActive, setIsActive] = useState(false);
  return (
    <header className={styles.navbar}>
       <img src="./assests/download.png" alt="/" width="115" style={{marginLeft:'3rem'}}/>
      <div>
           <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
              <li>
              <Link className={styles.link} to="home" spy={true} smooth={true} duration={500} onClick={navHandler}>
                Home
              </Link>
              </li>
              <li>
              <Link to="whyus" spy={true} smooth={true} duration={500} onClick={navHandler}>
                Why Us
              </Link>
              </li>
              <li>
              <Link to="features" spy={true} smooth={true} duration={500} onClick={navHandler}>
                Features
              </Link>
              </li>
              <li>
              <Link to="testimonials" spy={true} smooth={true} duration={500} onClick={navHandler}>
                Testimonials
              </Link>
              </li>
              <li className={styles.contact}>
              <Link to="contactus" spy={true} smooth={true} duration={500} onClick={navHandler}>
              Contact Us
              </Link>
              </li>
             
              <div className={styles.dropdown}>
               <div className={styles["dropdown-btn"]} onClick={(e) => setIsActive(!isActive)}>Login as</div> 
               {isActive && (
               <div className={styles["dropdown-content"]}>
                <div className={styles["dropdown-item"]} onClick={()=>{props.setlogin(true)}}>
                  Admin
                </div>
                <div className={styles["dropdown-item"]} onClick={()=>{props.setlogin(true)}}>
                  User
                </div>
               </div>
               )}
                </div>
             </ul>
      </div>
      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={25} />}
      </div>
    </header>
  );
};

export default Navbar
       
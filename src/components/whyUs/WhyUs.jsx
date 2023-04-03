import React from 'react'
import styles from './WhyUs.module.css'

const WhyUs = () => {
  return (
    <>
      <div className={styles.container} id="whyus">
          <h1>Why Should you <span style={{color:'orange'}}>Choose us?</span></h1>
        <div className={styles.main}>
          <div className={styles.image}>
            <img src="./assests/assest1.png" alt="" />
          </div>
          <div className={styles.text}>
            <h2>We provide best choice of hostels for you <span style={{color:'orange'}}>to stay</span></h2>
            <p>Bring a box full of hopes, dreams, ambitions… and of course, your personal belongings. Everything else - furniture, appliances, food - has already been taken care of.</p>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div  className={styles.text}>
          <h2>Step into a room that has<span  style={{color:'orange'}}> room for everything</span> </h2>
          <p>Bring a box full of hopes, dreams, ambitions… and of course, your personal belongings. Everything else - furniture, appliances, food - has already been taken care of.</p>
        </div>
        <div className={styles.image}>
          <img src="./assests/assest2.png" alt="" />
        </div>
      </div>
      <div className={styles.main}>
          <div className={styles.image}>
            <img src="./assests/assest3.png" alt="" />
          </div>
          <div className={styles.text}>
            <h2>Take your daily list of chores. And <span style={{color:'orange'}}>tear it up</span></h2>
            <p>Your clothes and bag will not be fighting for space on the same chair. At Stanza Living, there's ample room for all your possessions. Even a framed photo of your family, for the rare occasions you miss home.</p>
          </div>
        </div>
        <div className={styles.main}>
        <div  className={styles.text}>
          <h2>Expect Tasty Homely food in <span  style={{color:'orange'}}> "SmartPG's Kitchen"</span> </h2>
          <p>Instead, bring along a big appetite for healthy, yummy meals. With flavours that have a local touch. And that, at the same time, take your taste buds on a journey back home.</p>
        </div>
        <div className={styles.image}>
          <img src="./assests/assest4.png" alt="" />
        </div>
      </div>

    </> 
  )
}

export default WhyUs

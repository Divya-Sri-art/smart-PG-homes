import React from 'react'
import loginClasses from "./CreateForm.module.css"
import { AiOutlineClose } from 'react-icons/ai'



const CreateForm= (props) => {
  
  return (
    <div className={loginClasses["Container"]}>
      <div className={loginClasses["sub-wrapper"]}>
        <img src="./assests/download 8.png" alt=" " />
        <h4>Sign up <span style={{color: "orange"}}>as Owner</span></h4>
        <form >
        <input type="text" name="name" placeholder="Enter Full Name" /><br />
        <input type="email" name="email" placeholder="Enter Email(optinal)" /><br />
          <input type="number" name="number" placeholder="Enter Mobile Number" /><br />

          <button type="submit" >Create account</button>
          <h5>forgot your Password?</h5>
        </form>
      </div>
      <button className={loginClasses.icon} onClick={()=>{
        props.setCreate(false)
      }}>
        <AiOutlineClose />
        </button>
      </div>
  )
}

export default CreateForm
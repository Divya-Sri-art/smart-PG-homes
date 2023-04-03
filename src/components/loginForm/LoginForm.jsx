import React,{useState, useEffect}  from 'react'
import loginClasses from "./loginForm.module.css"
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'



const LoginForm = (props) => {
  
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard");
  }

  const [number,setNumber] = useState('');
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setNumber('');
    
  }

  useEffect(() => {
    if(sessionStorage.getItem('number'))
    setNumber(sessionStorage.getItem('number'));
  },[])
  
  useEffect(()=>{
    sessionStorage.setItem('number' ,number);
  },[number]) 

  return (
    <div className={loginClasses["Container"]}>
      <div className={loginClasses["sub-wrapper"]}>
        <img src="./assests/download 8.png" alt=" " />
        <h4>Sign in <span style={{color: "orange"}}>as Owner</span></h4>
        <form onSubmit={handleSubmit}  >
          <input type="number" value={number} placeholder="Enter Mobile Number" pattern="[0-9]*" onChange={(e)=>{
            if(e.target.value.length<=10){
              setNumber(e.target.value)
            }
          }}  /><br />
          <button type="submit" onClick={handleClick} >Sign in</button>
          <button type="submit" >Create account</button>
          <h5>forgot your Password?</h5>
        </form>
      </div>
      <button className={loginClasses.icon} onClick={()=>{
        props.setlogin(false)
      }}>
        <AiOutlineClose />
        </button>
      </div>
  )
}

export default LoginForm

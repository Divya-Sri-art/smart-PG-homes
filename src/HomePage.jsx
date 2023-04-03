import React,{useState} from 'react'
import Navbar from "./components/navbar/Navbar";
import LoginForm from "./components/loginForm/LoginForm";
import Home from "./components/home/Home";
import WhyUs from "./components/whyUs/WhyUs";
import Features from "./components/features/Features";
import Testimonials from "./components/testimonials/Testimonials";
import ContactUs from "./components/contactus/ContactUs";
import EnquiryForm from "./components/enquiryForm/EnquiryForm";
import Footer from "./components/footer/Footer";


const HomePage = () => {
    const [login,setLogin]=useState(false)
    const [click, setClick] = useState(false)
   
  return (
    <div>
    
    { login && <LoginForm login={login} setlogin={setLogin} />  }
    { click && <EnquiryForm click={click} setClick={setClick}/> }
    <Navbar setlogin={setLogin}/>
    <Home setClick={setClick} />
    <WhyUs />
    <Features />
    <Testimonials />
    <ContactUs />
    <Footer />
  
  </div>
  )
}

export default HomePage
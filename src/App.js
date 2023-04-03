import React from 'react'

import HomePage from './HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/pages/dashboard/Dashboard'
import Enquiry from './components/pages/enquiry/Enquiry'
import FoodMenu from './components/pages/foodMenu/FoodMenu'
import Guests from './components/pages/guests/Guests'
import Invoice from './components/pages/invoice/Invoice'
import ManagePG from './components/pages/managePG/ManagePG'
import MyRemainders from './components/pages/myRemainders/MyRemainders'
import Review from './components/pages/review/Review'
import Room from './components/pages/room/Room'
import Settings from './components/pages/settings/Settings'
import Staff from './components/pages/staff/Staff'
import User from './components/pages/user/User'
import Vendor from './components/pages/vendor/Vendor'
import BasicInfo from './components/basicInfo/BasicInfo'
import StaffDetails from './components/staffDetails/StaffDetails'
import BasicDetails from './components/basicDetails/BasicDetails'
import PersonalInfo from './components/personalInfo/PersonalInfo'
import GuestDetails from './components/guestDetails/GuestDetails'
import VendorDetails from './components/vendorDetails/VendorDetails'
import RoomDetails from './components/roomDetails/RoomDetails'



function App() {

    
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/review" element={<Review />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/foodMenu" element={<FoodMenu   />} />
          <Route path="/guests" element={<Guests />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/managePG" element={<ManagePG />} />
          <Route path="/myRemainders" element={<MyRemainders />} />
          <Route path="/room" element={<Room />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/staff" element={<Staff /> } />
          <Route path="/user" element={<User />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/basicinfo" element={<BasicInfo />} />
          <Route path="/staffDetails" element={<StaffDetails />} />
          <Route path="/vendorDetails" element={<VendorDetails />} />
          <Route path="/guestDetails" element={<GuestDetails />} />
          <Route path="/basicDetails" element={<BasicDetails />} />
          <Route path="/PersonalInfo" element={<PersonalInfo />} />
          <Route path="/roomDetails" element={<RoomDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

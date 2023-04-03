import React, { useState }  from 'react'
import Sidebar from "../components/Sidebar"
import Modal from '../components/modal/Modal'

function Layout({children}) {
  const [modal, setModal] =useState(false)
  return (
    <div>  
      {modal && <Modal modal={modal} setModal={setModal}/>}
        <Sidebar setModal={setModal} />
          {children}
    </div>
  )
}

export default Layout

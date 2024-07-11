import React from 'react'
import '../component/Header.css'
import  botlogo from  "../Images/Frame 3.png"

const Header = () => {
  return (
    <div className='header'>
     <img  className='uploadLogo' src={botlogo} alt=""  />     
    </div>
  )
}

export default Header

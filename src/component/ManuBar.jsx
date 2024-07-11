import React, { useState } from 'react';
import '../component/ManuBar.css';
import { NavLink } from 'react-router-dom';
import { FaHome, FaCog, FaExchangeAlt, FaThLarge, FaBroadcastTower, FaQuestionCircle } from 'react-icons/fa';

const ManuBar = () => {
  

  return (
    <div className='manubar'>
      <NavLink to="/" exact activeClassName="active" className="menu-item" >
        <FaHome />
        <span>Home</span>
      </NavLink>
      <NavLink to="/uploading-setup" activeClassName="active" className="menu-item">
        <FaCog />
        <span>Uploading setup</span>
      </NavLink>
      <NavLink to="/fileconversion" activeClassName="active" className="menu-item">
        <FaExchangeAlt />
        <span>File conversion</span>
      </NavLink>
      <NavLink to="/fence" activeClassName="active" className="menu-item">
        <FaThLarge />
        <span>Fence</span>
      </NavLink>
      <NavLink to="/live" activeClassName="active" className="menu-item">
        <FaBroadcastTower />
        <span>Live</span>
      </NavLink>
      <NavLink to="/help" activeClassName="active" className="menu-item">
        <FaQuestionCircle />
        <span>Help</span>
      </NavLink>

    </div>
  );
}
export default ManuBar;

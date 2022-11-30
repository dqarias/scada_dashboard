import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineDashboard } from 'react-icons/md';
import { RiDashboard2Line } from 'react-icons/ri';
import logo from '../assets/logo.png';

const SideBar = () => (
  <div className="sidebar">
    <div className="sidebar__image">
      <img src={logo} alt="logo" />
    </div>
    <ul className="sidebar__menu">
      <NavLink className="sidebar__menu-link" to="">
        <MdOutlineDashboard className="sidebar__menu-link-icons" />
        <li>Principal</li>
      </NavLink>
      <NavLink className="sidebar__menu-link" to="/panel">
        <RiDashboard2Line className="sidebar__menu-link-icons" />
        <li>Medidores</li>
      </NavLink>
    </ul>
  </div>
);

export default SideBar;

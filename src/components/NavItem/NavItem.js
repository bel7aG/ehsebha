import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({ url, title, className }) => (
  <li className={className}>
    <span className="line"></span>
    <NavLink exact to={url}>{title}</NavLink>
    <span className="line"></span>
  </li>
)

export default NavItem
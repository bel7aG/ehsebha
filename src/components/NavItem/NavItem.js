import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({ url, title, className }) =>
  <li className={className}>
    <NavLink to={url}>{title}</NavLink>
  </li>

export default NavItem
import React from 'react'
import { NavItem } from '../'

const Navigation = ({ pages }) => {
  const items = pages.map(({ title, url }) => {
    const className = title.toLowerCase().replace(/\s/, '-')
    return <NavItem key={className} title={title} url={url} className={className} />
  })
  
  return (
    <nav>
      <ul>
        {items}
      </ul>
    </nav>
  )
}

export default Navigation
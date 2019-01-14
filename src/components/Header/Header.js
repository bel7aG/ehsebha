import React from 'react'
import { Navigation } from '../'

const pages = [
  { title: `Dashboard`, url: `/` },
  { title: `Create Expense`, url: `/create` },
  { title: `Edit Expense`, url: `/edit` },
  { title: `Help`, url: `/help` }
]

const Header = () => (
  <header className="header">
    <Navigation pages={pages} />
  </header>
)

export default Header
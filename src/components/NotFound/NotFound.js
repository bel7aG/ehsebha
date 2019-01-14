import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <div className="not-found">
    <h1 className="foor-o-foor">404</h1>
    <Link to="/">Back To Home Page</Link>
  </div>
)

export default NotFound
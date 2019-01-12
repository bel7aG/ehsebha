import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Page from './Page'

const Router = () => (
  <Router>
    <>
      <MenuLink isActiveByDefault={true} to="/" content="Home" />
      <MenuLink isActiveByDefault={false} to="/about" content="other Page" />
      <hr/>
      <Route exact path="/" component={Home} />
      <Route exact path="/" component={Page} />
    </>
  </Router>
)

export default Router
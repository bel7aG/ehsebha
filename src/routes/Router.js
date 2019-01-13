import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Header, AddExpense, EditExpense, ExpenseDashboard, Help, NotFound } from '../components'

const Router = () => (
  <BrowserRouter>
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" components={ExpenseDashboard} />
        <Route exact path="/create" components={AddExpense} />
        <Route exact path="/edit" components={EditExpense} />
        <Route exact path="/help" components={Help} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  </BrowserRouter>
)

export default Router
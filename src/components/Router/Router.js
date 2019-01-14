import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Header, AddExpense, EditExpense, ExpenseDashboard, Help, NotFound } from '../'

const Router = () => (
  <BrowserRouter>
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={ExpenseDashboard} />
        <Route exact path="/create" component={AddExpense} />
        <Route exact path="/edit" component={EditExpense} />
        <Route exact path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  </BrowserRouter>
)

export default Router
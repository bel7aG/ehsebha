import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Header, Main, AddExpense, EditExpense, ExpenseDashboard, Help, NotFound } from '../components'

const Router = () => (
  <BrowserRouter>
    <Fragment>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/" component={ExpenseDashboard} />
          <Route path="/create" component={AddExpense} />
          <Route path="/edit/:id" component={EditExpense} />
          <Route path="/help" component={Help} />
          <Route component={NotFound} />
        </Switch>
      </Main>
    </Fragment>
  </BrowserRouter>
)

export default Router
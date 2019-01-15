import { createStore, combineReducers } from 'redux'

const demoState = {
  expenses: [{
    id: 'Belhassen gharsallah',
    description: 'chhar janvi',
    note: 'this was the final payment for that address',
    amount: 44010,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date  ot amount
    startDate: undefined,
    endDate: undefined
  }
}
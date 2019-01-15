//1 CREATE STORE
import { createStore } from 'redux'
console.log('redux 1O1')

// is called every single time the store was changed (dispatched :D)
const store = createStore()


// 1 - reducer is a pure function
// 2 - Never change state or actions
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.payload
      }
    case 'DECREMENT':
      return {
        count: state.count - action.payload
      }
    case 'RESET':
      return {
        count: 0
      }
    case 'SET':
      return {
        count: action.payload        
      }  
    default:
      return state    
  }
}



//action generator 
const incrementCount = ({ payload = 1 } = {}) => ({
  type: 'INCREMENT',
  payload
})

const decrementCount = ({ payload = 1 } = {}) => ({
  type: 'DECREMENT',
  payload
})

const resetCount = ({ payload = 0 } = {}) => ({
  type: 'RESET'
})

const setCount = ({ payload = 0 } = {}) => ({
  type: 'SET',
  payload
})

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(incrementCount({ payload: 10 }))
store.dispatch(incrementCount({ payload: 12 }))
store.dispatch(incrementCount({ payload: 3 }))

store.dispatch(decrementCount({ payload: 3 }))
store.dispatch(decrementCount({ payload: 75 }))

store.dispatch(resetCount({ payload: 111115 }))

store.dispatch(setCount({ payload: 3115 }))

unsubscribe()
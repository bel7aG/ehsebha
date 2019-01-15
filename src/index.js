import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/'
import "./styles/index.css"
import * as serviceWorker from './serviceWorker'
import "./playground/redux-101"
ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()

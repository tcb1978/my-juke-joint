import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import registerServiceWorker from './registerServiceWorker'
import store from './ducks/store'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

require('dotenv').config()

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>, document.getElementById('root'))
// registerServiceWorker()

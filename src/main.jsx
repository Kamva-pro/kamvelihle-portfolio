import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css'
import { javascript } from './assets'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/*
TODO: add a progress bar that will run for 5 seconds
or rather let it run till the computer canvas is loaded
*/

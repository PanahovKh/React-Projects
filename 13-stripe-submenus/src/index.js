import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { AppProvaider } from './context'


ReactDOM.render(
  <React.StrictMode>
    <AppProvaider>
      <App />
    </AppProvaider>
  </React.StrictMode>,
  document.getElementById('root')
)

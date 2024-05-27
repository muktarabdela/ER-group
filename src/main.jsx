import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UiProvider } from './UiContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UiProvider>
    <App />
  </UiProvider>,
)

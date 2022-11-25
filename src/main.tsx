import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { CommonProvider } from './context/common.provider';
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CommonProvider>
        <App />
      </CommonProvider>
    </BrowserRouter>
  </React.StrictMode>
)

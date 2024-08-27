import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { store } from './components/rtk/Store.jsx'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>
  <Toaster position='top-center' reverseOrder ={false} />
  <App />
  
  </Provider>
  </BrowserRouter>
  </React.StrictMode>,
)

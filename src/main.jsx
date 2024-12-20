import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import ChatSlice from './redux/ChatSlice'

let rootReducer = combineReducers({ ChatSlice });

let store = configureStore({
  reducer : rootReducer
})





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <App />

    </Provider>
    </BrowserRouter>
  </StrictMode>,
)

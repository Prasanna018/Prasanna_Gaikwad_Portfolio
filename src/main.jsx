import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { bubbleCursor } from 'cursor-effects'

new bubbleCursor({
  shape: "ring",
  size: 25,
  color: "red",
})

createRoot(document.getElementById('root')).render(

  < StrictMode >
    <App />
  </StrictMode >,
)
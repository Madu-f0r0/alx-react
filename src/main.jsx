import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Notifications from './Notifications.jsx'

createRoot(document.getElementById('root-notifications')).render(
  <StrictMode>
    <Notifications />
  </StrictMode>,
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

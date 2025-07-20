import { useState } from 'react'
import alxLogo from './alx-logo.jpg'
import { getFullYear, getFooterCopy } from './utils'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={alxLogo} alt="ALX Logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p> Login to access the full dashboard</p>
        <form action="">
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" />

          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" />

          <button>OK</button>
        </form>
      </div> 
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div> 

    
    
  )
}

export default App

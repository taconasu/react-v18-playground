import React from 'react'
import logo from './logo.svg'
import './App.css'
import { LearnSuspense } from './components/Suspense'

function App() {
  console.log('😊App Component Rendering!')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Learning React v18.</p>
      </header>
      <h1>Suspense</h1>
      <LearnSuspense />
    </div>
  )
}

export default App

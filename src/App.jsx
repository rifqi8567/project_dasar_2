// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const UserLogged = "Rifqi";
  const UserLoggedJSX = <strong>Bwa Version</strong>;
  let a = 1;
  let b = 2;
  


  return (
    <div className='App'>
      {UserLogged}
      {UserLoggedJSX}
      <h1>Belajar Versi BWA</h1>

      {a + b % 200}
    </div>
  )
}

export default App

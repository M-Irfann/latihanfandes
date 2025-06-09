import { useState } from 'react'
import './App.css'
import HEADER from './component/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HEADER/>
  )
}

export default App
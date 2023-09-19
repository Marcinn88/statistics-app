import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { React } from 'react';
import { AppBar } from './components/AppBar/AppBar'
import { Diagram } from './components/Diagram/Diagram'
// import { TaskForm } from './components/TaskForm/TaskForm'
// import { TaskList } from './components/TaskList/TaskList'
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AppBar/>
    <Diagram/>
    {/* <TaskForm/>
    <TaskList/> */}
    </>
  )
}

export default App

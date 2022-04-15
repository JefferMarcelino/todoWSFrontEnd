import { useEffect, useState } from 'react'
import TaskList from './TaskList'
import AddTask from './AddTask'
import "./style.css"

function App() {
  const [ tasks, setTasks] = useState(null)
  const [ message, setMessage] = useState(null)

  useEffect(() => {
    fetch("https://bantu-api.herokuapp.com/v1/task/all")
    .then(response => response.json())
    .then(data => {
      setTasks(data.response)
    })
    
    fetch("https://bantu-api.herokuapp.com/")
    .then(response => response.json())
    .then(data => {
      setMessage(data.bantu.toUpperCase())
    })
  }, [])

  return (
    <div className="App">
      <header>
        <p>{ message && message }</p>
        <h1>Todo app</h1>
      </header>
      <main>
        <AddTask setTasks={ setTasks } />
        {tasks && <TaskList tasks={ tasks } setTasks={ setTasks }/>}
      </main>
    </div>
  )
}

export default App

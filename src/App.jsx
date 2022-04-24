import { useEffect, useState } from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';
import fecthData from './hooks/fetchData';
export const url = import.meta.env.VITE_SOME_BASE_URL;
import './style.css';

function App() {
  const [tasks, setTasks] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fecthData(`${url}v1/task/all`, (data) => setTasks(data.response));
  }, []);

  useEffect(() => {
    fecthData(url, (data) => setMessage(data.bantu.toUpperCase()));
  }, []);

  return (
    <div className='App'>
      <header>
        {message && <p>{message}</p>}
        <h1>Todo app</h1>
      </header>
      <main>
        <AddTask setTasks={setTasks} />
        {tasks && <TaskList tasks={tasks} setTasks={setTasks} />}
      </main>
    </div>
  );
}

export default App;

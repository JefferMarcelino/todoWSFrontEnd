import { url } from './App';
import useUpdateData from './hooks/updateData';

const TaskList = ({ setTasks, tasks }) => {
  const deleteTask = async (e) => {
    await fetch(`${url}v1/task/remove/${e.target.parentElement.id}`, {
      method: 'delete',
    });
    useUpdateData(setTasks);
  };

  return (
    <div className='tasks'>
      {tasks.map((task) => {
        return (
          <div className='task' key={task.id} id={task.id}>
            <div className='text'>
              <h1>{task.title}</h1>
              <p>{task.description}</p>
            </div>
            <button onClick={deleteTask}></button>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;

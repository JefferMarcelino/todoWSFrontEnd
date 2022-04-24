import React from 'react';
import { url } from './App';
import useUpdateData from './hooks/updateData';

const options = (state) => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(state),
});

const AddTask = ({ setTasks }) => {
  const titleTask = React.useRef(null);
  const [state, setState] = React.useState({
    title: '',
    description: '',
  });

  function handleChange({ target }) {
    const name = target.name;
    setState({ ...state, [name]: target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (state.title !== '' && state.descriptionTask !== '') {
      await fetch(`${url}v1/task/store`, options(state));
    }
    useUpdateData(setTasks);
    setState({
      title: '',
      description: '',
    });
    titleTask.current.focus();
  };

  return (
    <div className='add-task'>
      <form onSubmit={handleSubmit}>
        <input
          ref={titleTask}
          name='title'
          type='text'
          value={state.title}
          placeholder='Titulo...'
          className='title'
          onChange={handleChange}
        />
        <input
          type='text'
          name='description'
          value={state.description}
          onChange={handleChange}
          placeholder='Escreva a sua Tarefa...'
          className='description'
        />
        <button>Adicionar</button>
      </form>
    </div>
  );
};

export default AddTask;

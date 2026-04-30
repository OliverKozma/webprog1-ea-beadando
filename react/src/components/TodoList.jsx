import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input }]);
      setInput('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <h2>Teendő lista</h2>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Írj be egy új feladatot..."
      />
      <button className="btn-add" onClick={addTask}>Hozzáadás</button>
      
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span>{task.text}</span>
            <button className="btn-delete" onClick={() => deleteTask(task.id)}>Törlés</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
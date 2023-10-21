import React from 'react';
import './ToDo-List.css';

const ToDo = ({ task, onDelete }) => {
  return (
    <li>
      {task}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default ToDo;

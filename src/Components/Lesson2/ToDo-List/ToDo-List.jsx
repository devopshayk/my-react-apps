import React, { useState } from 'react';
import './ToDo-List.css';

const ToDo = ({ task, onDelete }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleToggleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <li className={isCompleted ? 'completed' : ''}>
      {task}
      <button onClick={onDelete}>Delete</button>
      <button onClick={handleToggleComplete} className="check-button">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/2048px-Check_green_icon.svg.png" alt="Checkmark" />
      </button>
    </li>
  );
}

export default ToDo;

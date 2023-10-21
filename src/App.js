import React, { Component } from 'react';
import ToDo from './Components/Lesson2/ToDo-List/ToDo-List';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      newTask: ''
    };
  }

  handleNewTaskChange = (e) => {
    this.setState({ newTask: e.target.value });
  }

  addTask = () => {
    if (this.state.newTask !== '') {
      this.setState({
        tasks: [...this.state.tasks, this.state.newTask],
        newTask: ''
      });
    }
  }

  deleteTask = (index) => {
    const newTasks = [...this.state.tasks];
    newTasks.splice(index, 1);
    this.setState({ tasks: newTasks });
  }

  render() {
    return (
      <div>
        <h1>ToDo List</h1>
        <div>
          <input
            type="text"
            value={this.state.newTask}
            onChange={this.handleNewTaskChange}
            placeholder="Enter a new task"
          />
          <button onClick={this.addTask}>Add Task</button>
        </div>
        <ul>
          {this.state.tasks.map((task, index) => (
            <ToDo
              key={index}
              task={task}
              onDelete={() => this.deleteTask(index)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

import './App.css';
import { useState } from 'react';

function App() {
  let [ toDoList, setToDoLists] = useState([]);
  let [ newTask, setTask] = useState("");


  const inputChange = (event) => {
    setTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
      complited: false,
    }
    setToDoLists([...toDoList, task]);
  }

  const deleteTask = (id) => {
    setToDoLists(toDoList.filter((task) => task.id !== id));
  }

  const taskComplited = (id) => {
    setToDoLists(toDoList.map((task) => {
      if (task.id === id){
        return {...task, complited: true};
      } else{
        return task
      } 
    }))
  }

  return (
    <div className="App">
      <div>
        <input type='text' onChange={inputChange}/>
        <button onClick={addTask}>Submit</button>
      </div>
      <div>
        {toDoList.map((task) => {
          return (
            <div style={{background: task.complited ? "green" : "white"}}>
              <h2>{task.taskName}</h2>
              <button onClick={() => {deleteTask(task.id)}}>X</button>
              <button onClick={() => {taskComplited(task.id)}}>Complited</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}


export default App;

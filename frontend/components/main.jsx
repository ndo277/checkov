import React, {useState, useEffect} from 'react';
import TaskItem from './task_item';

function Main(props) {

  useEffect(() => {
    props.fetchTasks();
  }, []);

  const [task, setTask] = useState("");
  const [selectedTask, setSelectedTask] = useState("");
  const [selectedTaskBody, setSelectedTaskBody] = useState("");

  const handleLogOut = () => {
    props.logout();
  };

  const handleTaskSubmit = () => {
    const taskData = {body: task};
    props.createTask(taskData).then(() => {
      setTask("");
    });
  };

  const handleTaskInput = (e) => {
    setTask(e.currentTarget.value);
  };

  const handleTaskSelect = (task) => {
    setSelectedTask(task);
    setSelectedTaskBody(task.body);
  };

  const handleTaskEditSubmit = () => {
    const taskData = Object.assign({}, selectedTask, { body: selectedTaskBody });
    props.editTask(taskData);
  };

  const handleTaskEdit = (e) => {
    setSelectedTaskBody(e.currentTarget.value);
  };



  return(
    <div>
      <div className="header">
        <h3>CHECKOV</h3>
        <p>Hi, {props.currentUser.username}.</p>
        <button onClick={handleLogOut}>Log Out</button>
      </div>

      <div>
        <h1>TASKS</h1>

        <form onSubmit={handleTaskSubmit}>
          <input type="text" onChange={handleTaskInput} value={task} />
          <input type="submit" />
        </form>

        {props.tasks.map(task => {
          return <li key={task.id}>
            <TaskItem task={task} deleteTask={props.deleteTask} onSelectTask={handleTaskSelect}/>
          </li>
        })}
      </div>

      <form onSubmit={handleTaskEditSubmit}>
        <input type="text" value={selectedTaskBody} onChange={handleTaskEdit}/>
      </form>
      
    </div> 
  )
}

export default Main;
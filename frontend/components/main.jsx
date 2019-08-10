import React, {useState, useEffect} from 'react';
import TaskItem from './task_item';
import {Link} from 'react-router-dom';

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

  const handleDeleteClick = () => {
    if (props.checkedTasks){
      props.checkedTasks.forEach(task => {
        props.deleteTask(task.id);
      });
    } else {
      props.tasks.forEach(task => {
        props.deleteTask(task.id);
      });
    }
  };

  const handleCheckAllClick = () => {
    props.tasks.forEach(task => {
      const newTaskData = Object.assign({}, task, {checked: true});
      props.editTask(newTaskData);
    });
  };

  return(
    <div>
      <div className="header">
        <h3>CHECKOV</h3>
        <p>Hi, {props.currentUser.username}.</p>
        <button onClick={handleLogOut}>Log Out</button>
      </div>

      <div className="sections">
        <section className="navlinks">
          <Link to="/all">
            All
        </Link>

          <Link to="/checked">
            Checked
        </Link>

          <Link to="/unchecked">
            Unchecked
        </Link>
        </section>

        <section className="goals">
          <h1>GOALS</h1>

          <button onClick={handleDeleteClick}>
            Delete Checked Off
        </button>

          <button onClick={handleCheckAllClick}>
            Check Off All Tasks
        </button>

          <form onSubmit={handleTaskSubmit}>
            <input type="text" onChange={handleTaskInput} value={task} placeholder="Add goal"/>
            <input type="submit" value="+"/>
          </form>

          {props.tasks.map(task => {
            return <li key={task.id} className="task-list">
              <TaskItem
                task={task}
                deleteTask={props.deleteTask}
                editTask={props.editTask}
                onSelectTask={handleTaskSelect}
              />
            </li>
          })}
        </section>

        <section className="tasks">
          <h1>TASKS</h1>
          
          <form onSubmit={handleTaskEditSubmit} onBlur={handleTaskEditSubmit}>
            <input type="text" value={selectedTaskBody} onChange={handleTaskEdit} />
          </form>
        </section>


      </div>

      
      
    </div> 
  )
}

export default Main;
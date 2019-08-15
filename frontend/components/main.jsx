import React, {useState, useEffect} from 'react';
import TaskItem from './task_item';
import StepItem from './step_item';
import {NavLink} from 'react-router-dom';

function Main(props) {

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [selectedTask, setSelectedTask] = useState("");
  const [selectedTaskBody, setSelectedTaskBody] = useState("");
  const [step, setStep] = useState("");
  // const [isSearching, setIsSearching]  = useState(false);
  // const [filteredTasks, setFilteredTasks]  = useState([]);

  useEffect(() => {
    props.fetchTasks().then((res) => {
      let tasks = Object.values(res.tasks);
      setTasks(tasks);
      // console.log("******", tasks);
    });
  }, []);

  const handleLogOut = () => {
    props.logout();
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
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
    props.fetchSteps(task.id);
  };

  const handleTaskEditSubmit = (e) => {
    e.preventDefault();
    const taskData = Object.assign({}, selectedTask, { body: selectedTaskBody });
    props.editTask(taskData);
  };

  const handleTaskEdit = (e) => {
    setSelectedTaskBody(e.currentTarget.value);
  };

  const handleDeleteTasksClick = () => {
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

  const handleDeleteStepsClick = () => {
    props.steps.forEach(step => {
      if (step.checked){
        props.deleteStep(step.id);
      }
    });
  };

  const handleStepSubmit  = (e) => {
    e.preventDefault();
    const stepData = {body: step, task_id: selectedTask.id};
    props.createStep(stepData).then(() => {
      setStep("");
    });
  };

  const handleStepInput  = (e) => {
    setStep(e.currentTarget.value);
  };

  const handleCheckAllClick = () => {
    props.tasks.forEach(task => {
      const newTaskData = Object.assign({}, task, {checked: true});
      props.editTask(newTaskData);
    });
  };

  const handleSearchInput = (e) => {
    // setIsSearching(true);
    let searchBody = e.currentTarget.value.toLowerCase();
    let filteredTasks = props.tasks.filter(task => {
      let taskBody = task.body.toLowerCase();
      return (
        taskBody.indexOf(searchBody) !== -1
      );
    });

    setTasks(filteredTasks);
  };

  const TasksList = (
    <section className="tasks-section">

      <div className="tasks-header">
        <h1>TASKS</h1>

        <form onSubmit={handleTaskSubmit}>
          <input
            type="text"
            onChange={handleTaskInput}
            value={task}
            placeholder="Add task"
            className="input-field"
          />

          <input type="submit" value="+" className="button" />
        </form>


        <div className="task-buttons">
          <button onClick={handleDeleteTasksClick} className="del-button">
            Delete Checked Tasks
              </button>

          <button onClick={handleCheckAllClick} className="button">
            Check Off All Tasks
              </button>
        </div>
      </div>

      {tasks.map(task => {
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
  )

  // const FilteredTasksList = (
  //   <section className="tasks-section">

      {/* <div className="tasks-header">
        <h1>TASKS</h1>

        <form onSubmit={handleTaskSubmit}>
          <input
            type="text"
            onChange={handleTaskInput}
            value={task}
            placeholder="Add task"
            className="input-field"
          />

          <input type="submit" value="+" className="button" />
        </form>


        <div className="task-buttons">
          <button onClick={handleDeleteTasksClick} className="del-button">
            Delete Checked Tasks
              </button>

          <button onClick={handleCheckAllClick} className="button">
            Check Off All Tasks
              </button>
        </div>
      </div> */}

      {/* {filteredTasks.map(task => {
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
  ) */}

  const TaskSidebar = (
    <section className="task-sidebar" >

      <form onSubmit={handleTaskEditSubmit} onBlur={handleTaskEditSubmit}>
        <input
          type="text"
          value={selectedTaskBody}
          onChange={handleTaskEdit}
          className="task-input"
        />
      </form>

      <form onSubmit={handleStepSubmit}>
        <input
          type="text"
          onChange={handleStepInput}
          value={step}
          placeholder="Add step"
          className="input-field"
        />
        <input type="submit" value="+" className="button" />
      </form>

      <button onClick={handleDeleteStepsClick} className="del-button">
        Delete Checked Steps
      </button>


      {props.steps.map(step => {
        return <li key={step.id} className="task-list">
          <StepItem step={step} deleteStep={props.deleteStep} editStep={props.editStep} />
        </li>
      })}

      


    </section>
  )

  const Header = (
    <div className="header">
      <h2 className="logo">CHECKOV</h2>

      <form >
        <input type="text" onChange={handleSearchInput}/>
      </form>

      <button onClick={handleLogOut} className="logout-button">Log out {props.currentUser.username}</button>
    </div>
  )

  const NavLinksBar = (
    <section className="navlinks-sidebar">
      <NavLink to="/all" className="navlink" activeClassName="active">
        All
          </NavLink>

      <NavLink to="/checked" className="navlink">
        Checked
          </NavLink>

      <NavLink to="/unchecked" className="navlink">
        Unchecked
          </NavLink>
    </section>
  )
  
  if (!tasks) return null;

  return(
    <div>
      {Header}
      <div className="sections">
        {NavLinksBar}
        {TasksList}
        {/* {!isSearching && TasksList} */}
        {/* {isSearching && FilteredTasksList} */}
        {selectedTask && TaskSidebar}
      </div> 
    </div> 
  )
}

export default Main;
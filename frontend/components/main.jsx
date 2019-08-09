import React, {useState, useEffect} from 'react';

function Main(props) {

  useEffect(() => {
    props.fetchTasks();
  }, []);

  const [task, setTask] = useState("");

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
            {task.body}
          </li>
        })}
      </div>
      
    </div> 
  )
}

export default Main;
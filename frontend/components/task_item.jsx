import React from 'react';

function TaskItem(props) {

  const handleXClick = () => {
    props.deleteTask(props.task.id);
  };

  const handleCheckTask = () => {
    const newTaskData = Object.assign({}, props.task, { checked: !props.task.checked });
    props.editTask(newTaskData);
  };

  const handleSelectTask = () => {
    let task = props.task;
    props.onSelectTask(task);
  };

  return(
   <div className="task">
     <input type="checkbox" checked={props.task.checked} onChange={handleCheckTask}/>
      <div onClick={handleSelectTask}>
        {props.task.body}
      </div>
      <button onClick={handleXClick}>X</button>
   </div>
  )
}

export default TaskItem;
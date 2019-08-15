import React from 'react';

function TaskItem(props) {

  const handleXClick = () => {
    let taskId = props.task.id;
    // update parent state in parallel with redux state for filtering
    props.removeTask(taskId);
    props.deleteTask(taskId);
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
   <div className="task-item">
      <div className="task-mark" >
        <input type="checkbox" checked={props.task.checked} onChange={handleCheckTask} />
        <div className="task-body" onClick={handleSelectTask}>
            {props.task.body}
        </div>
      </div>
      
      <button onClick={handleXClick} className="trash-button">X</button>
   </div>
  )
}

export default TaskItem;
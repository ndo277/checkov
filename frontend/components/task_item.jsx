import React from 'react';

function TaskItem(props) {

  const handleXClick = () => {
    props.deleteTask(props.task.id);
  };

  const handleSelectTask = () => {
    let task = props.task;
    props.onSelectTask(task);
  };

  return(
   <div>
      <div onClick={handleSelectTask}>
        {props.task.body}
      </div>
      <button onClick={handleXClick}>X</button>
   </div>
  )
}

export default TaskItem;
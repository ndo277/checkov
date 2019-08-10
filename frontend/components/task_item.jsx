import React from 'react';

function TaskItem(props) {

  const handleXClick = () => {
    props.deleteTask(props.task.id);
  };

  return(
   <div>
      {props.task.body}
      <button onClick={handleXClick}>X</button>
   </div>
  )
}

export default TaskItem;
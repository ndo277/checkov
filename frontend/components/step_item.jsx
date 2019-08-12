import React from 'react';

function StepItem(props) {

  const handleStepDelete = () => {
    props.deleteStep(props.step.id);
  };

  return(
    <div>
      {props.step.body}
      <button onClick={handleStepDelete}>X</button>
    </div>
  )
}

export default StepItem;
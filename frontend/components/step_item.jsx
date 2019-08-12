import React from 'react';

function StepItem(props) {

  const handleStepDelete = () => {
    props.deleteStep(props.step.id);
  };

  const handleCheckStep = () => {
    const newStepData = Object.assign({}, props.step, { checked: !props.step.checked });
    props.editStep(newStepData);
  };

  return(
    <div>
      <input type="checkbox" checked={props.step.checked} onChange={handleCheckStep} />
      {props.step.body}
      <button onClick={handleStepDelete}>X</button>
    </div>
  )
}

export default StepItem;
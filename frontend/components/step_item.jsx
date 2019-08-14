import React, {useState, useEffect} from 'react';

function StepItem(props) {

  useEffect(() => {
    setStepBody(props.step.body);
  }, []);

  const [stepBody, setStepBody] = useState("");

  const handleStepDelete = () => {
    props.deleteStep(props.step.id);
  };

  const handleStepEdit = (e) => {
    setStepBody(e.currentTarget.value);
  };

  const handleStepSubmit = (e) => {
    e.preventDefault();
    const stepData = Object.assign({}, props.step, {body: stepBody});
    props.editStep(stepData);
  };

  const handleCheckStep = () => {
    const newStepData = Object.assign({}, props.step, { checked: !props.step.checked });
    props.editStep(newStepData);
  };

  return(
    <div className="step-item">
      <div className="task-mark">
        <input type="checkbox" checked={props.step.checked} onChange={handleCheckStep} />
        <form onSubmit={handleStepSubmit} onBlur={handleStepSubmit}>
          <input 
            type="text" value={stepBody} 
            onChange={handleStepEdit} 
            className="step-input"
            />
        </form>
      </div>
      
      <button onClick={handleStepDelete} className="trash-button">X</button>
    </div>
  )
}

export default StepItem;
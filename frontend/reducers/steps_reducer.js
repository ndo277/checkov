import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/step_actions';

const stepsReducer = (action, state = {}) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_STEPS:
      return action.steps;
    case RECEIVE_STEP:
      const newState = { [action.step.id]: action.step };
      return Object.assign({}, state, newState);
    case REMOVE_STEP:
      let nextState = Object.assign({}, state);
      delete nextState[action.stepId];
      return nextState;
    default:
      return state;
  }
};

export default stepsReducer;
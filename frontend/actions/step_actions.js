import * as StepApiUtil from '../util/step_api_util';

export const RECEIVE_STEPS = 'RECEIVE_STEPS';
export const RECEIVE_STEP = 'RECEIVE_STEP';
export const REMOVE_STEP = 'REMOVE_STEP';


const receiveSteps = (steps) => {
  return {
    type: RECEIVE_STEPS,
    steps
  };
};

const receiveStep = (step) => {
  return {
    type: RECEIVE_STEP,
    step
  };
};

const removeStep = (stepId) => {
  return {
    type: REMOVE_STEP,
    stepId
  };
};

export const fetchSteps = (taskId) => (dispatch) => {
  return StepApiUtil.fetchSteps(taskId).then(
    steps => dispatch(receiveSteps(steps)));
};

export const createStep = (data) => (dispatch) => {
  return StepApiUtil.createStep(data).then(
    step => dispatch(receiveStep(step)));
};

export const deleteStep = (id) => (dispatch => {
  return StepApiUtil.deleteStep(id).then(
    step => dispatch(removeStep(id)));
});

export const editStep = (step) => (dispatch => {
  return StepApiUtil.editStep(step).then(
    step => dispatch(receiveStep(step)));
});
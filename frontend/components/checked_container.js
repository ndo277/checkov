import { connect } from 'react-redux';
import Main from './main';
import { logout } from '../actions/session_actions';
import { fetchTasks, createTask, deleteTask, editTask, updateTasks } from '../actions/task_actions';
import { fetchSteps, createStep, deleteStep, editStep } from '../actions/step_actions';

const mapStateToProps = (state) => {
  const currentUser = state.entities.users[state.session.id];

  const tasks = Object.values(state.entities.tasks).filter(task => {
    return task.checked === true;
  });

  const steps = Object.values(state.entities.steps);

  return { currentUser, tasks, steps};
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchTasks: () => dispatch(fetchTasks()),
  createTask: (data) => dispatch(createTask(data)),
  deleteTask: (id) => dispatch(deleteTask(id)),
  editTask: (task) => dispatch(editTask(task)),
  fetchSteps: (taskId) => dispatch(fetchSteps(taskId)),
  createStep: (data) => dispatch(createStep(data)),
  deleteStep: (id) => dispatch(deleteStep(id)),
  editStep: (step) => dispatch(editStep(step)),
  updateTasks: (tasks) => dispatch(updateTasks(tasks))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
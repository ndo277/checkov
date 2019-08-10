import { connect } from 'react-redux';
import Main from './main';
import { logout } from '../actions/session_actions';
import { fetchTasks, createTask, deleteTask, editTask } from '../actions/task_actions';

const mapStateToProps = (state) => {
  const currentUser = state.entities.users[state.session.id];
  const tasks = Object.values(state.entities.tasks).filter(task => {
    return task.checked === true;
  });

  return { currentUser, tasks};
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchTasks: () => dispatch(fetchTasks()),
  createTask: (data) => dispatch(createTask(data)),
  deleteTask: (id) => dispatch(deleteTask(id)),
  editTask: (task) => dispatch(editTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
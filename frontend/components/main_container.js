import { connect } from 'react-redux';
import Main from './main';
import { logout } from '../actions/session_actions';
import { fetchTasks, createTask} from '../actions/task_actions';

const mapStateToProps = (state) => {
  const currentUser = state.entities.users[state.session.id];
  const tasks = Object.values(state.entities.tasks);

  return {currentUser, tasks};
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchTasks: () => dispatch(fetchTasks()),
  createTask: (data) => dispatch(createTask(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
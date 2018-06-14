import { combineReducers } from 'redux';
import login from './login';
import toggleSidebar from './toggleSidebar';

export default combineReducers({
  isLoggedIn: login,
  isSidebarOpen: toggleSidebar,
});
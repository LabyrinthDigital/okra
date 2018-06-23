import { combineReducers } from 'redux';
import login from './login';
import toggleSidebar from './toggleSidebar';
import semesterCategories from './semesterCategories';

export default combineReducers({
  isLoggedIn: login,
  semesterCategories,  
  isSidebarOpen: toggleSidebar,
});
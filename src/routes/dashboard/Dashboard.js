import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Sidebar from '../../components/Sidebar';
import ContentContainer from './ContentContainer';
import SidebarDrawer from '../../components/Sidebar/SidebarDrawer';

const styles = {
  
};

class Dashboard extends Component {
  state = {
    isSidebarOpen: false,
  }

  handleToggleSidebar = () => this.setState(prevState => ({
    isSidebarOpen: !prevState.isSidebarOpen,
  }));

  render() {
    const { isSidebarOpen } = this.state;
    const { classes } = this.props;

    console.log('hello');

    return (
      <div className={classes.sideBar}>
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          onToggleSidebar={this.handleToggleSidebar}
        />
        <SidebarDrawer isSidebarOpen={isSidebarOpen}>
          <Link to="/lessons">Lessons</Link>
        </SidebarDrawer>
        <ContentContainer isSidebarOpen={isSidebarOpen} />
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);

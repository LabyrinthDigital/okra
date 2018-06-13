import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Sidebar from '../../components/Sidebar';

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

    return (
      <div className={classes.sideBar}>
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          onToggleSidebar={this.handleToggleSidebar}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);

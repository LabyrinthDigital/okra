import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Sidebar from '../../components/Sidebar';

const styles = {
  sideBar: {
    padding: 20,
    width: 250,
  },
};

class Dashboard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.sideBar}>
        <Sidebar />
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);

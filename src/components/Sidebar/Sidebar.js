import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  sideBar: {
    position: 'relative',
    width: 75,
    boxShadow:
      `0px 2px 4px -1px rgba(0, 0, 0, 0.2), 
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 
      0px 1px 10px 0px rgba(0, 0, 0, 0.12)`,
    height: '100vh',
    backgroundColor: '#fafafa',
  },
  arrowForward: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    paddingBottom: 10,
  },
  forwardButton: {
    width: 75,
  },
};

const Sidebar = props => {
  const { classes, isSidebarOpen, onToggleSidebar } = props;

  console.log(isSidebarOpen);

  return (
    <div className={classes.sideBar}>
      sidebar
      <div className={classes.arrowForward}>
        <Button onClick={onToggleSidebar} className={classes.forwardButton}>
          <ArrowForward />
        </Button>
      </div>
    </div>
  );
};

export default withStyles(styles)(Sidebar);

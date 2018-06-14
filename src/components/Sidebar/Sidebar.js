import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { withStyles } from '@material-ui/core/styles';
import SidebarDrawer from './SidebarDrawer';

const styles = {
  sideBar: {
    width: 75,    
    transition: 'all .2s ease',
    position: 'fixed',
    height: '100vh',
    backgroundColor: '#475A64',
    zIndex: 99,
  },
  arrowForward: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 50,
    display: 'flex',
    borderTop: '1px solid #ddd',
    backgroundColor: '#475A64',
  },
  forwardButton: {
    minWidth: '100%',
    borderRadius: 0,
    color: '#ddd',
  },
};

const Sidebar = props => {
  const { classes, isSidebarOpen, onToggleSidebar } = props;

  return (
    <div className={classes.sideBar}>
      sidebar
      <div className={classes.arrowForward}>
        <Button onClick={onToggleSidebar} className={classes.forwardButton}>
          {
            isSidebarOpen 
            ? <ArrowBack />
            : <ArrowForward />
          }
        </Button>
      </div>
    </div>
  );
};

export default withStyles(styles)(Sidebar);

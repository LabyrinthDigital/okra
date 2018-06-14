import React from 'react';
import cn from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  sidebarDrawer: {
    transition: 'all .2s ease',
    position: 'fixed',
    left: 75,  
    top: 0,
    bottom: 0,
    width: 250,
    zIndex: 98,
    backgroundColor: '#F5F5F5',
    boxShadow:
      `0px 2px 4px -1px rgba(0, 0, 0, 0.2), 
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 
      0px 1px 10px 0px rgba(0, 0, 0, 0.12)`,
    transform: 'translateX(-100%)',
  },
  sidebarDrawerIsOpen: {
    transform: 'translateX(0%)',
  },
};

const SidebarDrawer = props => {
  const { classes, children } = props;

  return (
    <div className={cn(classes.sidebarDrawer, {
      [classes.sidebarDrawerIsOpen]: props.isSidebarOpen,
    })}>
      {children}
    </div>
  );
};

export default withStyles(styles)(SidebarDrawer);

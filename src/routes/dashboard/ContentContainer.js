import cn from 'classnames';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import DashboardRouter from './subroutes';

const styles = {
  contentContainer: {
    transition: 'all .2s ease',
    padding: '15px 15px 15px 85px',
  },
  sidebarIsOpen: {
    padding: '15px 15px 15px 340px',
  },
};

const ContentContainer = props => {
  const { classes, isSidebarOpen } = props;

  return (
    <div className={cn(classes.contentContainer, {
      [classes.sidebarIsOpen]: isSidebarOpen,
    })}>
      <DashboardRouter />
    </div>
  );
}

export default withStyles(styles)(ContentContainer);

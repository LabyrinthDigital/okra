import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';

const styles = {
  root: {
    backgroundColor: '#fff',
    height: 70,
  },
  titleBar: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  iconBox: {
    flex: 3,
    textAlign: 'right',
    backgroundColor: '#A8C0ED',
    padding: 5,
    borderRadius: '100%',
    color: '#fff',
  },
  icon: {
    fontSize: 14,
    color: '#fff',
    cursor: 'pointer',
  },
  title: {
    flex: 1,
    textAlign: 'left',
    fontSize: 16,
  },
};

const Titlebar = props => {
  const { classes } = props;

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.titleBar}>
        <Typography className={classes.title}>
          Lessons
        </Typography>
        <Typography>
          <div className={classes.iconBox}>
            <AddCircleOutline className={classes.icon} />
          </div>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Titlebar);

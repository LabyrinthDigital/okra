import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Titlebar from '../../../../components/Titlebar';

const styles = {};

const Lessons = props => {
  const { classes } = props;

  console.log('heyyy');

  return (
    <div>
      <Titlebar />
    </div>
  );
};

export default withStyles(styles)(Lessons);

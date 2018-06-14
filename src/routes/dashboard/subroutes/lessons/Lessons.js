import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {};

const Lessons = props => {
  const { classes } = props;

  console.log('heyyy');

  return (
    <div>
      lessons
    </div>
  );
};

export default withStyles(styles)(Lessons);

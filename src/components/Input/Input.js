import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  input: {
    width: '100%',
  },
};

const InputWrapper = props => {
  const { classes } = props;

  return (
    <TextField className={classes.input} {...props} />
  );
}

export default withStyles(styles)(InputWrapper);

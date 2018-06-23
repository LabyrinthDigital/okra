import React, { Fragment } from 'react';
import fp from 'lodash/fp';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
  },
};

const YEAR_RANGE = 25;

const createMenuOptionsForDates = (date) => {
  const dates = [];

  for (let i = (date - YEAR_RANGE); i < (date + YEAR_RANGE); i++) {
    dates.push(i);
  }

  return dates;
}

const SemesterPicker = props => {
  const { classes } = props;

  const dates = createMenuOptionsForDates(new Date().getFullYear());

  console.log(props.value);

  return (
    <TextField
      select
      label="Semester"
      className={classes.input}
      {...props}
    >
      {
        dates.map(date => (
          <Fragment key={date}>
            <MenuItem value={`01/${date}`}>{`Spring semester ${date}`}</MenuItem>
            <MenuItem value={`08/${date}`}>{`Fall semester ${date}`}</MenuItem>
          </Fragment>
        ))
      }
    </TextField>
  );
}

export default withStyles(styles)(SemesterPicker);

import React from 'react';
import fp from 'lodash/fp';
import { withStyles } from '@material-ui/core/styles';
import WithModal from '../../../../components/HOC/WithModal';

const styles = {
  form: {
    padding: 25,
  },
};

const CreateLessonForm = props => {
  const { classes } = props;

  return (
    <div className={classes.form}>
      This is the form!
    </div>
  );
}

export default fp.compose(
  WithModal,  
  withStyles(styles),
)(CreateLessonForm);
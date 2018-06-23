import React, { Component } from 'react';
import fp from 'lodash/fp';
import Input from '../../../../components/Input';
import { withStyles } from '@material-ui/core/styles';
import { getCurrentSemester } from '../../../../utils';
import WithModal from '../../../../components/HOC/WithModal';
import SemesterPicker from '../../../../components/SemesterPicker';

const styles = {
  form: {
    padding: '0 25px 25px 25px',
  },
  input: {
    marginBottom: 15,
  },
};

class CreateLessonForm extends Component {
  state = {
    selectedSemester: getCurrentSemester(),
  }

  render() {
    const { classes } = this.props;
    const { selectedSemester } = this.state;

    return (
      <div className={classes.form}>
        <div className={classes.input}>
          <Input
            label="Name"
            placeholder="Category name" 
          />
        </div>
        <div className={classes.input}>
          <Input
            label="Description"
            placeholder="This was fun" 
          />
        </div>
        <div className={classes.input}>
          <SemesterPicker value={selectedSemester} />
        </div>
      </div>
    );
  }
}

export default fp.compose(
  WithModal,  
  withStyles(styles),
)(CreateLessonForm);
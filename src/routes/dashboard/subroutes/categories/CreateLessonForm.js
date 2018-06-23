import uuid from 'uuid';
import fp from 'lodash/fp';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '../../../../components/Input';
import { Submit, Cancel } from '../../../../components/Form';
import { getCurrentSemester } from '../../../../utils';
import WithModal from '../../../../components/HOC/WithModal';
import WithToast from '../../../../components/HOC/WithToast';
import SemesterPicker from '../../../../components/SemesterPicker';
import AddSemesterCategory from '../../../../redux/actions/AddSemesterCategory';

const styles = {
  form: {
    padding: '0 25px 25px 25px',
    width: 400,
    maxWidth: 400,
    minHeight: '35vh',
  },
  input: {
    marginBottom: 20,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    width: '100%',
  },
  cancel: {
    padding: '12px 30px',
    color: '#333',
    borderRadius: 3,
    border: '1px solid #ccc',
    cursor: 'pointer',
  },
};

class CreateLessonForm extends Component {
  state = {
    selectedSemester: getCurrentSemester(),
    categoryName: '',
    categoryDescription: '',
    isSubmitting: false,
  };

  get isFormValid() {
    const {
      selectedSemester,
      categoryName,
      categoryDescription,
    } = this.state;

    return selectedSemester
      && categoryName.length
      && categoryDescription.length;
  }

  handleSubmit = async () => {
    const { addCategory, onToast, onModalClose } = this.props;
    const {
      selectedSemester,
      categoryName,
      categoryDescription,
    } = this.state;

    this.setState({ isSubmitting: true });

    setTimeout(() => {
      addCategory({
        name: categoryName,
        date: selectedSemester.value,
        description: categoryDescription,
        id: uuid.v4(),
      });

      onToast('Category successfully created');
      this.setState({ isSubmitting: false });
      onModalClose();
    }, 2000);
  }

  handleSelectChange = (selectedSemester) => this.setState({
    selectedSemester,
  });

  handleInputChange = name => ({ target }) => this.setState({
    [name]: target.value,
  });

  render() {
    const { classes, onModalClose, addCategory } = this.props;
    const { selectedSemester, isSubmitting } = this.state;

    console.log(this.props);

    return (
      <div className={classes.form}>
        <div className={classes.input}>
          <SemesterPicker
            placeholder="Semester"
            onChange={this.handleSelectChange}
            value={selectedSemester}
          />
        </div>
        <div className={classes.input}>
          <Input
            onChange={this.handleInputChange('categoryName')}
            placeholder="Category name" 
          />
        </div>
        <div className={classes.input}>
          <Input
            onChange={this.handleInputChange('categoryDescription')}
            placeholder="Description" 
          />
        </div>
        <div className={classes.buttons}>
          <Cancel onClick={onModalClose} />
          <Submit
            isSubmitting={isSubmitting}
            isDisabled={!this.isFormValid} 
            onClick={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addCategory: category => dispatch(AddSemesterCategory(category)),
});

export default fp.compose(
  connect(f => f, mapDispatchToProps),
  WithToast,
  WithModal,  
  withStyles(styles),
)(CreateLessonForm);
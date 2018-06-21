import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Titlebar from '../../../../components/Titlebar';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import CreateLessonForm from './CreateLessonForm';

const styles = {
  icon: {
    fontSize: 14,
    color: '#fff',
    cursor: 'pointer',
  },
};

class Lessons extends Component {
  state = { isModalOpen: false };

  get icons() {
    const { classes } = this.props;

    return [
      {
        id: 1,
        Component: AddCircleOutline,
        className: classes.icon,
        onClick: this.handleIconClick, 
      }
    ];
  }

  handleIconClick = () => this.setState(prevState => ({
    isModalOpen: !prevState.isModalOpen,
  }));

  render() {
    const { isModalOpen } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <Titlebar icons={this.icons} />
        <CreateLessonForm
          open={isModalOpen} 
          onModalClose={this.handleIconClick}
          title="Create a new category"
        />
      </div>
    );
  }
};

export default withStyles(styles)(Lessons);

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import ClassContainer from './ClassContainer';
import CreateClassForm from './CreateClassForm';
import Titlebar from '../../../../components/Titlebar';

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
        toolTipContent: "Add category",
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
        <Titlebar title="Classes" icons={this.icons} />
        <ClassContainer />
        <CreateClassForm
          open={isModalOpen} 
          onModalClose={this.handleIconClick}
          title="Create a new class"
        />
      </div>
    );
  }
};

export default withStyles(styles)(Lessons);

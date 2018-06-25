import fp from 'lodash/fp';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import Titlebar from '../../../../components/Titlebar';

const styles = {
  icon: {
    fontSize: 14,
    color: '#fff',
    cursor: 'pointer',
  },
};

class Topics extends Component {
  state = { isModalOpen: false };

  get icons() {
    const { classes } = this.props;

    return [
      {
        id: 1,
        toolTipContent: "Add topics",
        Component: AddCircleOutline,
        className: classes.icon,
        onClick: this.handleIconClick, 
      }
    ];
  }

  get breadCrumbs() {
    const { id } = this.props;

    return [
      {
        
      }
    ];
  }

  handleIconClick = () => this.setState(prevState => ({
    isModalOpen: !prevState.isModalOpen,
  }));

  render() {
    const { isModalOpen } = this.state;
    const { classes } = this.props;

    console.log('lel', this.props);

    return (
      <div>
        <Titlebar
          title="Topics"
          icons={this.icons}
        />
      </div>
    );
  }
};

export default fp.compose(
  withRouter,
  withStyles(styles),
)(Topics);

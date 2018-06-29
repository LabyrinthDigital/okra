import _ from 'lodash';
import fp from 'lodash/fp';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import Table from '../../../../components/Table';
import Titlebar from '../../../../components/Titlebar';

const styles = {
  root: {
  },
  tableRoot: {
    padding: 20,
  },
  icon: {
    fontSize: 14,
    color: '#fff',
    cursor: 'pointer',
  },
  tableContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#fff',
    boxShadow: 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px',
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
    const { id, match } = this.props;

    return [
      {
        name: match.params.id,
        link: `/classes/${match.params.id}`
      }
    ];
  }

  handleIconClick = () => this.setState(prevState => ({
    isModalOpen: !prevState.isModalOpen,
  }));

  render() {
    const { isModalOpen } = this.state;
    const { classes, match } = this.props;

    console.log('lel', this.props);

    return (
      <div className={classes.root}>
        <Titlebar
          breadCrumbs={_.get(match.params, 'id') ? this.breadCrumbs : []}
          title="Topics"
          icons={this.icons}
        />
        <div className={classes.tableRoot}>
          <div className={classes.tableContainer}>
            <Table />
          </div>
        </div>
      </div>
    );
  }
};

export default fp.compose(
  withRouter,
  withStyles(styles),
)(Topics);

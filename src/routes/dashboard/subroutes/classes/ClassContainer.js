import fp from 'lodash/fp';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ClassComponent from './Class';

const styles = {
  root: {
    padding: 25,
    display: 'flex',
    flexWrap: 'wrap',
  },
};

const mapClassesToClassComponent = fp.map(category => (
  <ClassComponent
    key={category.id}
    date={category.date}
    name={category.name}
    description={category.description}
  />
));

const CategoryContainer = props => {
  const { classes, semesterClasses } = props;

  return (
    <div className={classes.root}>
      {mapClassesToClassComponent(semesterClasses)}
    </div>
  );
};

const mapStateToProps = ({ semesterClasses }) => ({
  semesterClasses,
});

export default fp.compose(
  connect(mapStateToProps),
  withStyles(styles),
)(CategoryContainer);

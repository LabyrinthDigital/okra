import fp from 'lodash/fp';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Category from './Category';

const styles = {
  root: {
    padding: 25,
  },
};

const mapCategoriesToCategory = fp.map(category => (
  <Category
    key={category.id}
    semester={category.date}
    name={category.name}
    description={category.description}
  />
));

const CategoryContainer = props => {
  const { classes, semesterCategories } = props;

  return (
    <div className={classes.root}>
      {mapCategoriesToCategory(semesterCategories)}
    </div>
  );
};

const mapStateToProps = ({ semesterCategories }) => ({
  semesterCategories,
});

export default fp.compose(
  connect(mapStateToProps),
  withStyles(styles),
)(CategoryContainer);

import cn from 'classnames';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ArrowForward from '@material-ui/icons/ArrowForward';

const styles = {
  card: {
    position: 'relative',
    boxShadow: 'rgba(0, 0, 0, 0.06) 0px 2px 4px 0px',
    padding: 25,
    backgroundColor: '#fff',
    flexBasis: 250,
    border: '1px solid #fafafa',
    position: 'relative',
    cursor: 'pointer',
    minHeight: 175,
    marginRight: 15,
    marginTop: 15,
  },
  name: {
    color: '#b0b0b0',
    fontSize: 12,
    fontWeight: 700,
  },
  hr: {
    borderTop: '1px solid #eee',
  },
  arrowIsHovered: {
    transform: 'translateX(10px)',    
  },
  arrow: {
    position: 'absolute',
    bottom: 25,
    right: 25,    
    left: 25,
    height: 20,
    transition: 'all .2s ease',
    color: '#A8C0ED',
    textAlign: 'right',
  },
};

class Category extends React.Component {
  state = { isHovered: false };

  handleMouseOver = () => this.setState(prevState => ({
    isHovered: !prevState.isHovered,
  }));

  render() {
    const { classes, name, description } = this.props;
    const { isHovered } = this.state;

    return (
      <div
        className={classes.card}
        onMouseLeave={this.handleMouseOver}
        onMouseEnter={this.handleMouseOver}
      >
        <div className={classes.name}>
          {name}
        </div>
        <hr className={classes.hr} />
        <div>
          <p>{description}</p>
        </div>
        <div className={cn(classes.arrow, {
          [classes.arrowIsHovered]: isHovered,
        })}>
          <ArrowForward />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Category);

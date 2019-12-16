import React from 'react';
import _ from 'lodash';
// library to set component properties
import PropTypes from 'prop-types';
// css in js library for react
import withStyles from 'react-jss';

const styles = {
  '@keyframes zoom': {
    from: { transform: 'scale(0)' },
    to: { transform: 'scale(1)' },
  },
  '@keyframes opacity': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  '@keyframes background': {
    from: { background: 'rgba(0,0,0,0.0)' },
    to: { background: 'rgba(0,0,0,0.4)' },
  },
  active: {
    '&$root': {
      zIndex: 10,
      display: 'block',
    },
  },
  root: {
    display: 'none',
    background: 'rgba(0,0,0,0.4)',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    animationName: 'background',
    animationDuration: '0.3s',
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    right: 35,
    color: '#f1f1f1',
    fontSize: 40,
    fontWeight: 'bold',
    transition: '0.3s',
    outline: 'none',
    animationName: 'opacity',
    animationDuration: '1s',
    zIndex: 1,
  },
  content: ({ bgColor }) => ({
    background: bgColor,
    margin: 'auto',
    display: 'block',
    width: '100%',
    height: '100%',
    animationName: 'zoom',
    animationDuration: '1s',
  }),
};

const getClassNames = (obj) => {
  let classes = '';
  _.map(obj, (val, key) => {
    classes += val ? ` ${key}` : '';
  });
  return classes;
};

const Modal = withStyles(styles)(({ classes, handleModalClose, isActive }) => {
  const classNames = getClassNames({
    [classes.active]: isActive,
    [classes.root]: true,
  });

  return (
    <React.Fragment>
      <div className={classNames}>
        <span
          onClick={handleModalClose}
          onKeyDown={handleModalClose}
          role="button"
          tabIndex={0}
          className={classes.closeButton}
        >
          &times;
        </span>
        <div className={classes.content} />
      </div>
    </React.Fragment>
  );
});

Modal.propTypes = {
  classes: PropTypes.object,
  handleModalClose: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

Modal.defaultProps = {
  classes: {},
};

export default Modal;
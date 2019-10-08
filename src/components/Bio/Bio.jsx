import React from 'react';
import PropTypes from 'prop-types';
import 'simplebar/dist/simplebar.min.css';
import './Bio.scss';
import SimpleBar from 'simplebar-react';

/* About */
export const Bio = (props) => {
  const {} = props;

  return (
    <SimpleBar style={{ height: '100%' }}>
      This is the stateless Bio component.
    </SimpleBar>
  );
};

Bio.propTypes = {};

Bio.defaultProps = {};
/* */

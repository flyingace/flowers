import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { map as _map } from 'lodash';
import * as ROUTES from '../../constants/routes';
import './Navigation.scss';

const Navigation = (props) => {
  const { poems } = props;

  const createPoemLinks = () => {
    return _map(poems, (poem, idx) => {
      return (
        <li key={`li_${idx}`}>
          <Link to={`/poem/${poem.poemId}`}>{poem.poemTitle}</Link>
        </li>
      );
    });
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to={ROUTES.LANDING}>Home</Link>
        </li>
        {createPoemLinks()}
        <li>
          <Link to={ROUTES.TOC}>Table of Contents</Link>
        </li>
        <li>
          <Link to={ROUTES.POEMFORM}>Form</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

Navigation.propTypes = {
  poems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Navigation.defaultProps = {};
/* */

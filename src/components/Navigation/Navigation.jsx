import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { map as _map } from 'lodash';
import * as ROUTES from '../../constants/routes';
import './Navigation.scss';

const Navigation = (props) => {
  const [poemsData, setPoemsData] = useState(null);

  const createPoemLinks = () => {
    // console.log(Object.keys(poemsData));
    return _map(poemsData, (poemData, idx) => {
      // console.log(poemData.snapshot.key);
      return (
        <li key={`li${idx}`}>
          <Link to={`/poem/${poemData.key}`}>{poemData.poemTitle}</Link>
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
          <Link to={ROUTES.POEM}>PoemById</Link>
        </li>
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

Navigation.propTypes = {};

Navigation.defaultProps = {};
/* */

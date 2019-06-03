import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { map as _map } from 'lodash';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';
import './Navigation.scss';

export const Navigation = withFirebase(Nav);

/* Navigation */
function Nav(props) {
  const { firebase } = props;
  const [poemsData, setPoemsData] = useState(null);

  useEffect(() => {
    firebase
      .poemsData()
      .once('value')
      .then((snapshot) => {
        console.log(Object.keys(snapshot.val()));
        setPoemsData(snapshot.val());
      })
      .catch((err) => console.log(err));
  }, []);

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
          <Link to="/poem/ember">PoemById</Link>
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
}

Nav.propTypes = {
  firebase: PropTypes.objectOf(PropTypes.any),
};

Nav.defaultProps = {
  firebase: {},
};
/* */

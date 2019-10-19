import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router';
import { Link, withRouter } from 'react-router-dom';
import poemOrder from '../../poemOrder';
import * as ROUTES from '../../constants/routes';
import './Navigation.scss';

const Navigation = (props) => {
  const { history, poemId } = props;

  const [previousPoem, setPreviousPoem] = useState({});
  const [nextPoem, setNextPoem] = useState({});

  const isPoemPage = !!useRouteMatch('/poems/');

  useEffect(() => {
    const filteredPoemOrder = poemOrder.filter((poemData) => {
      return poemData.id !== undefined;
    });
    const currentIndex = filteredPoemOrder.findIndex((poemData) => {
      return poemData.id === poemId;
    });

    if (currentIndex > 0) {
      setPreviousPoem(filteredPoemOrder[currentIndex - 1]);
    } else {
      setPreviousPoem({});
    }

    if (currentIndex < filteredPoemOrder.length - 1) {
      setNextPoem(filteredPoemOrder[currentIndex + 1]);
    } else {
      setNextPoem({});
    }
  }, [poemId]);

  useEffect(() => {
    const handleKeyDown = (evt) => {
      const keycode = evt.keyCode;
      if (isPoemPage) {
        if (keycode === 37) {
          history.push(`/poems/${previousPoem.id}`);
        }
        if (keycode === 39) {
          history.push(`/poems/${nextPoem.id}`);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [history, nextPoem.id, previousPoem.id, isPoemPage]);

  return (
    <nav>
      <ul className="main-navigation">
        <li>
          <Link to={ROUTES.LANDING}>Flowers of Bad</Link>
        </li>
        <li>
          <Link to={ROUTES.TOC}>Table of Contents</Link>
        </li>
        <li>
          <Link to={ROUTES.ABOUT}>About</Link>
        </li>
        {/*{process.env.NODE_ENV !== 'production' && (*/}
        {/*  <li>*/}
        {/*    <Link to={ROUTES.POEMFORM}>Form</Link>*/}
        {/*  </li>*/}
        {/*)}*/}
      </ul>
      {isPoemPage && (
        <ul className="next-previous-navigation">
          <li>
            {previousPoem.id && (
              <Link to={`/poems/${previousPoem.id}`} className="previous-poem">
                previous
              </Link>
            )}
          </li>
          <li>
            {nextPoem.id && (
              <Link to={`/poems/${nextPoem.id}`} className="next-poem">
                next
              </Link>
            )}
          </li>
        </ul>
      )}
      ;
    </nav>
  );
};

export default withRouter(Navigation);

Navigation.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  poemId: PropTypes.string.isRequired,
};

Navigation.defaultProps = {};
/* */

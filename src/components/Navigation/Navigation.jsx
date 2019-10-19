import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import './Navigation.scss';

const Navigation = (props) => {
  const { history, poemId, tocData } = props;

  const [previousPoem, setPreviousPoem] = useState({});
  const [nextPoem, setNextPoem] = useState({});

  const isPoemPage = !!useRouteMatch('/poems/');

  useEffect(() => {
    const currentIndex = tocData.findIndex((tocItem) => {
      return tocItem.poemId === poemId;
    });

    if (currentIndex > 0) {
      setPreviousPoem(tocData[currentIndex - 1]);
    } else {
      setPreviousPoem({});
    }

    if (currentIndex < tocData.length - 1) {
      setNextPoem(tocData[currentIndex + 1]);
    } else {
      setNextPoem({});
    }
  }, [poemId, tocData]);

  useEffect(() => {
    const handleKeyDown = (evt) => {
      const keycode = evt.keyCode;
      if (isPoemPage) {
        if (keycode === 37 && previousPoem.poemId) {
          history.push(`/poems/${previousPoem.poemId}`);
        }
        if (keycode === 39 && nextPoem.poemId) {
          history.push(`/poems/${nextPoem.poemId}`);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [history, nextPoem.poemId, previousPoem.poemId, isPoemPage]);

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
            {previousPoem.poemId && (
              <Link
                to={`/poems/${previousPoem.poemId}`}
                className="previous-poem"
              >
                previous
              </Link>
            )}
          </li>
          <li>
            {nextPoem.poemId && (
              <Link to={`/poems/${nextPoem.poemId}`} className="next-poem">
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
  tocData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Navigation.defaultProps = {};
/* */

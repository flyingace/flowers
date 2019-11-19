import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cover from '../../assets/cover@2x.png';
import './Landing.scss';

/* Landing */
export default function Landing(props) {
  const { poems, requestAllPoems } = props;

  useEffect(() => {
    if (poems.length === 0) {
      requestAllPoems();
    }
  }, [poems, requestAllPoems]);

  return <div className="landing-page"></div>;
}

Landing.propTypes = {
  poems: PropTypes.arrayOf(PropTypes.object),
  requestAllPoems: PropTypes.func.isRequired,
};

Landing.defaultProps = {
  poems: [],
};
/* */

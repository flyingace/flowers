import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Landing.scss';

/* Landing */
export default function Landing(props) {
  const { poems, requestAllPoems } = props;

  useEffect(() => {
    if (poems.length === 0) {
      requestAllPoems();
    }
  }, [poems, requestAllPoems]);

  return (
    <div className="landing-page">
      <img
        src="../../../public/assets/cover@2x.png"
        alt="Flowers of Bad cover"
      />
    </div>
  );
}

Landing.propTypes = {
  poems: PropTypes.arrayOf(PropTypes.object),
  requestAllPoems: PropTypes.func.isRequired,
};

Landing.defaultProps = {
  poems: [],
};
/* */

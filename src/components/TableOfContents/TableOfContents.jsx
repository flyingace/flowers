import React from 'react';
import PropTypes from 'prop-types';
import './TableOfContents.scss';
import { map as _map } from 'lodash';
import { Link } from 'react-router-dom';

/* TableOfContents */
export default function TableOfContents(props) {
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
    <React.Fragment>
      <ul>{createPoemLinks()}</ul>
    </React.Fragment>
  );
}

TableOfContents.propTypes = {
  poems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

TableOfContents.defaultProps = {};
/* */

import React from 'react';
import PropTypes from 'prop-types';
import SimpleBar from 'simplebar-react';
import { Link } from 'react-router-dom';
import poemOrder from '../../poemOrder';
import 'simplebar/dist/simplebar.min.css';
import './TableOfContents.scss';

/* TableOfContents */
const TableOfContents = () => {
  const generateLinks = () => {
    return poemOrder.map((link) => {
      if (link.sectionTitle) {
        return (
          <h3 className="section-title" key={link.sectionTitle}>
            {link.sectionTitle}
          </h3>
        );
      }
      return (
        <li key={link.id}>
          <Link to={`/poem/${link.id}`}>{link.title}</Link>
        </li>
      );
    });
  };

  return (
    <SimpleBar style={{ height: '100%' }}>
      <div className="table-of-contents">
        <h2>Table of Contents</h2>
        <ul>{generateLinks()}</ul>
      </div>
    </SimpleBar>
  );
};

TableOfContents.propTypes = {};

TableOfContents.defaultProps = {};

export default TableOfContents;
/* */

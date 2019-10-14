import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestAllPoems } from '../../_actions/PoemsActions';
import { TOCData } from '../../_selectors/selectors';
import './TableOfContents.scss';

const sectionTitles = {
  spleenEtIdeal: 'Spleen Et Idéal',
  tableauxParisiens: 'Tableaux Parisiens',
  leVin: 'Le Vin',
  fleursDuMal: 'Fleurs Du Mal',
  revolte: 'Révolte',
  laMort: 'La Mort',
};

/* TableOfContents */
const TableOfContents = (props) => {
  // eslint-disable-next-line no-shadow
  const { tocData, requestAllPoems } = props;

  useEffect(() => {
    if (tocData.length === 0) requestAllPoems();
  }, [requestAllPoems, tocData]);

  const generateLinks = () => {
    return tocData.map((item, idx) => {
      if (idx > 0 && item.poemSection !== tocData[idx - 1].poemSection) {
        return (
          <React.Fragment key={item.poemId}>
            <h3 className="section-title">{sectionTitles[item.poemSection]}</h3>
            <li>
              <Link to={`/poem/${item.poemId}`}>
                <span className="toc-numeral">{item.poemNumber}</span>
                <span className="toc-title">{item.poemTitle}</span>
                <span className="toc-title-french">{item.poemTitleFrench}</span>
              </Link>
            </li>
          </React.Fragment>
        );
      }
      return (
        <li key={item.poemId}>
          <Link to={`/poem/${item.poemId}`}>
            <span className="toc-numeral">{item.poemNumber}</span>
            <span className="toc-title">{item.poemTitle}</span>
            <span className="toc-title-french">{item.poemTitleFrench}</span>
          </Link>
        </li>
      );
    });
  };

  return (
    <div className="table-of-contents">
      <h2>Table of Contents</h2>
      <ul>{generateLinks()}</ul>
    </div>
  );
};

TableOfContents.propTypes = {
  tocData: PropTypes.arrayOf(PropTypes.object),
  requestAllPoems: PropTypes.func.isRequired,
};

TableOfContents.defaultProps = {
  tocData: [],
};
/* */

function mapStateToProps(state) {
  return {
    tocData: TOCData(state),
  };
}

export default connect(
  mapStateToProps,
  { requestAllPoems }
)(TableOfContents);

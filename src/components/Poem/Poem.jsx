/* eslint no-use-before-define: off */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import './Poem.scss';

/* Poem */
const Poem = (props) => {
  const {
    getPoemById,
    poemBody,
    poemDedication,
    poemEpigram,
    poemId,
    poemNumber,
    poems,
    poemSubTitle,
    poemTitle,
    requestAllPoems,
  } = props;

  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (poems.length === 0) {
      requestAllPoems();
    } else {
      getPoemById(poemId);
    }
  }, [getPoemById, poemId, poems, requestAllPoems]);

  useEffect(() => {
    if (poemTitle !== '') {
      setIsFading(true);
    }
  }, [poemId, poemTitle]);

  const generatePoemBody = (lines, sectionNumber = '') => {
    if (typeof lines[0] === 'string') {
      return lines.map((line, idx) => {
        // eslint-disable-next-line react/no-array-index-key
        return <Line key={`${sectionNumber}line${idx}`}>{line}</Line>;
      });
    }

    return poemBody.map((section, idx) => {
      const { poemSection } = section;
      return (
        // eslint-disable-next-line react/no-array-index-key
        <React.Fragment key={`${idx}section${poemSection.sectionNumber}`}>
          <div className="poem-section-title">{poemSection.sectionNumber}</div>
          <PoemBody>
            {generatePoemBody(
              poemSection.sectionBody,
              poemSection.sectionNumber
            )}
          </PoemBody>
        </React.Fragment>
      );
    });
  };

  const poemClass = isFading ? 'poem fade-in' : 'poem';
  return (
    <React.Fragment>
      <div className={poemClass}>
        <div className="poem-number">{poemNumber}</div>
        <Title>{poemTitle}</Title>
        {poemSubTitle && <div className="poem-subtitle">{poemSubTitle}</div>}
        {poemEpigram && <div className="poem-epigram">{poemEpigram}</div>}
        {poemDedication && (
          <div className="poem-dedication">{poemDedication}</div>
        )}
        <PoemBody>{generatePoemBody(poemBody)}</PoemBody>
        <Link to={ROUTES.POEMEDIT}>edit</Link>
      </div>
    </React.Fragment>
  );
};

Poem.propTypes = {
  getPoemById: PropTypes.func.isRequired,
  poemBody: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ).isRequired,
  poemDedication: PropTypes.string,
  poemEpigram: PropTypes.string,
  poemId: PropTypes.string,
  poemNumber: PropTypes.string,
  poems: PropTypes.arrayOf(PropTypes.object).isRequired,
  poemSubTitle: PropTypes.string,
  poemTitle: PropTypes.string.isRequired,
  requestAllPoems: PropTypes.func.isRequired,
};

Poem.defaultProps = {
  poemDedication: '',
  poemEpigram: '',
  poemId: '',
  poemNumber: '',
  poemSubTitle: '',
};

export default Poem;
/*  */

/* Title */
export const Title = ({ children }) => {
  return <div className="poem-title">{children}</div>;
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
};
/*  */

/* Poem Body */
export const PoemBody = ({ children }) => {
  return <div className="poem-body">{children}</div>;
};

PoemBody.propTypes = {
  children: PropTypes.node,
};

PoemBody.defaultProps = {
  children: <></>,
};
/*  */

/* Line */
export const Line = ({ children }) => {
  const line = children.split('');
  line.splice(line.lastIndexOf(' '), 1, '\xa0');
  const noWidow = line.join('');
  return noWidow.search(/<[a-z]+>/) > -1 ? (
    <div className="poem-line" dangerouslySetInnerHTML={{ __html: noWidow }} />
  ) : (
    <div className="poem-line">{noWidow}</div>
  );
};

Line.propTypes = {
  children: PropTypes.node.isRequired,
};
/*  */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Poem.scss';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

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
  }, [setIsFading, poemTitle]);

  const generatePoemBody = () => {
    return poemBody.map((line, idx) => {
      // eslint-disable-next-line react/no-array-index-key
      return <Line key={`line${idx}`}>{line}</Line>;
    });
  };

  const poemClass = isFading ? 'poem fade-in' : 'poem';
  return (
    <div className={poemClass}>
      <div className="poem-number">{poemNumber}</div>
      <Title>{poemTitle}</Title>
      {poemSubTitle && <div className="poem-subtitle">{poemSubTitle}</div>}
      {poemEpigram && <div className="poem-epigram">{poemEpigram}</div>}
      {poemDedication && (
        <div className="poem-dedication">{poemDedication}</div>
      )}
      <PoemBody>{generatePoemBody()}</PoemBody>
      <Link to={ROUTES.POEMEDIT}>edit</Link>
    </div>
  );
};

Poem.propTypes = {
  getPoemById: PropTypes.func.isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  poemBody: PropTypes.arrayOf(PropTypes.string).isRequired,
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
  poemId: 'benediction',
  poemNumber: '',
  poemSubTitle: '',
};

export default Poem;

export const Title = ({ children }) => {
  return <div className="poem-title">{children}</div>;
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export const PoemBody = ({ children }) => {
  return <div className="poem-body">{children}</div>;
};

PoemBody.propTypes = {
  children: PropTypes.node,
};

PoemBody.defaultProps = {
  children: <></>,
};

export const Line = ({ children }) => {
  const line = children.split('');
  line.splice(line.lastIndexOf(' '), 1, '\xa0');
  const noWidow = line.join('');

  return <div className="poem-line">{noWidow}</div>;
};

Line.propTypes = {
  children: PropTypes.node.isRequired,
};

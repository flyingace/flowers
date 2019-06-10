import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Poem.scss';

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

  useEffect(() => {
    if (poems.length === 0) {
      requestAllPoems();
    } else {
      getPoemById(poemId);
    }
  }, [getPoemById, poemId, poems, requestAllPoems]);

  const generatePoemBody = () => {
    return poemBody.map((line, idx) => {
      // eslint-disable-next-line react/no-array-index-key
      return <Line key={`line${idx}`}>{line}</Line>;
    });
  };

  return (
    <div className="poem">
      <div className="poem-number">{poemNumber}</div>
      <Title>{poemTitle}</Title>
      {poemSubTitle && <div className="poem-subtitle">{poemSubTitle}</div>}
      {poemDedication && (
        <div className="poem-dedication">{poemDedication}</div>
      )}
      {poemEpigram && <div className="poem-epigram">{poemEpigram}</div>}
      <PoemBody>{generatePoemBody()}</PoemBody>
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

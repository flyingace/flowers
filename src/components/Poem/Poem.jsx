import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Poem.scss';

const PoemPage = (props) => {
  const [poemNumber, setPoemNumber] = useState('');
  const [poemTitle, setPoemTitle] = useState('');
  const [poemSubTitle, setPoemSubTitle] = useState('');
  const [poemDedication, setPoemDedication] = useState('');
  const [poemEpigram, setPoemEpigram] = useState('');
  const [poemBody, setPoemBody] = useState([]);
  const { firebase, match } = props;

  useEffect(() => {
    const { poemId } = match.params;

    firebase
      .poem(poemId)
      .once('value')
      .then((snapshot) => {
        setPoemSubTitle(snapshot.val().poemSubtitle);
        setPoemDedication(snapshot.val().poemDedication);
        setPoemEpigram(snapshot.val().poemEpigram);
        setPoemBody(snapshot.val().poemBody);
      });
    firebase
      .poemData(poemId)
      .once('value')
      .then((snapshot) => {
        setPoemNumber(snapshot.val().poemNumber);
        setPoemTitle(snapshot.val().poemTitle);
      });
  }, []);

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

export default PoemPage;

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

import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { camelCase } from 'lodash';
import './PoemForm.scss';

const PoemForm = (props) => {
  const number = useRef(null);
  const title = useRef(null);
  const subTitle = useRef(null);
  const frenchTitle = useRef(null);
  const dedication = useRef(null);
  const epigram = useRef(null);
  const poemBody = useRef(null);

  const onSubmit = (evt) => {
    evt.preventDefault();
    const pbArray = poemBody.current.value.split(/\r?\n/g);
    const poemId = camelCase(title.current.value);
    console.log(number, title, frenchTitle, pbArray);
    // .poem(poemId)
    // .set({
    //   poemNumber: number.current.value,
    //   poemTitle: title.current.value,
    //   poemSubTitle: subTitle.current.value,
    //   poemTitleFrench: frenchTitle.current.value,
    //   poemDedication: dedication.current.value,
    //   poemEpigram: epigram.current.value,
    //   poemBody: pbArray,
    // })
    // .then((resp) => console.log(resp))
    // .catch((err) => console.error(err));
  };

  return (
    <div className="poem-form">
      <h2>Poem</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="number">Number</label>
        <input type="text" id="number" name="number" ref={number} />
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" ref={title} />
        <label htmlFor="subTitle">SubTitle</label>
        <input type="text" id="subTitle" name="subTitle" ref={subTitle} />
        <label htmlFor="title-french">Title (French)</label>
        <input
          type="text"
          id="title-french"
          name="title-french"
          ref={frenchTitle}
        />
        <label htmlFor="dedication">Dedication</label>
        <input type="text" id="dedication" name="dedication" ref={dedication} />
        <label htmlFor="epigram">Epigram</label>
        <textarea
          id="epigram"
          name="epigram"
          rows="3"
          cols="33"
          ref={epigram}
        />
        <label htmlFor="poemBody">Poem Body</label>
        <textarea
          id="poemBody"
          name="poemBody"
          rows="24"
          cols="33"
          ref={poemBody}
        />
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
};

export default PoemForm;

PoemForm.propTypes = {};

PoemForm.defaultProps = {};
/* */

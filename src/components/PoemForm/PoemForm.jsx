/* eslint no-param-reassign: off */
/* eslint no-use-before-define: off */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { camelCase } from 'lodash';
import './PoemForm.scss';

const PoemForm = (props) => {
  const numberField = useRef(null);
  const titleField = useRef(null);
  const subTitleField = useRef(null);
  const sectionSelect = useRef(null);
  const frenchTitleField = useRef(null);
  const dedicationField = useRef(null);
  const epigramField = useRef(null);
  const poemBodyField = useRef(null);
  const poemIdField = useRef(null);
  const {
    addPoem,
    edit,
    updatePoem,
    _id,
    poemBody,
    poemDedication,
    poemEpigram,
    poemNumber,
    poemSubTitle,
    poemTitleFrench,
    poemTitle,
    poemId,
  } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    const pbArray = convertBodyToArray(poemBodyField.current.value);
    const poemData = {
      _id,
      poemBody: pbArray,
      poemDedication: dedicationField.current.value,
      poemEpigram: epigramField.current.value,
      poemNumber: numberField.current.value,
      poemSection: sectionSelect.current.value,
      poemSubTitle: subTitleField.current.value,
      poemTitle: titleField.current.value,
      poemTitleFrench: frenchTitleField.current.value,
      poemId: edit
        ? poemIdField.current.value
        : camelCase(titleField.current.value),
    };

    if (!edit) {
      addPoem(poemData);
    } else {
      updatePoem(_id, poemData);
    }
  };

  const resetForm = () => {
    [
      numberField,
      titleField,
      subTitleField,
      frenchTitleField,
      dedicationField,
      epigramField,
      poemBodyField,
      poemIdField,
      sectionSelect,
    ].forEach((fieldRef) => {
      fieldRef.current.value = '';
    });
  };

  const convertBodyToArray = (poemBodyAsLongString) => {
    const poemBodyAsArray = poemBodyAsLongString.split(/\r?\n/g);
    const twoOrMoreSpaces = /( ){2,}/g;
    const startItalic = /(<em>)/g;
    const endItalic = /(<\/em>)/g;
    return poemBodyAsArray.map((line) => {
      const l = line
        .replace(twoOrMoreSpaces, ' ')
        .replace(startItalic, '\u003Cem\u003E')
        .replace(endItalic, '\u003C\u002Fem\u003E')
        .trim();
      return l;
    });
  };

  const convertArrayToBody = (poemBodyAsArray) => {
    if (poemBodyAsArray.length > 0) {
      return poemBodyAsArray.reduce((a, b) => {
        return a + '\u000A' + b.toString();
      });
    }

    return '';
  };

  const buttonLabel = edit ? 'Update' : 'Submit';

  return (
    <div className="poem-form">
      <h2>Poem</h2>
      <form>
        <label htmlFor="number">Number</label>
        <input
          type="text"
          id="number"
          name="number"
          ref={numberField}
          defaultValue={poemNumber}
        />
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          ref={titleField}
          defaultValue={poemTitle}
        />
        <label htmlFor="subTitle">SubTitle</label>
        <input
          type="text"
          id="subTitle"
          name="subTitle"
          ref={subTitleField}
          defaultValue={poemSubTitle}
        />
        <label htmlFor="title-french">Title (French)</label>
        <input
          type="text"
          id="title-french"
          name="title-french"
          ref={frenchTitleField}
          defaultValue={poemTitleFrench}
        />
        <label htmlFor="dedication">Dedication</label>
        <input
          type="text"
          id="dedication"
          name="dedication"
          ref={dedicationField}
          defaultValue={poemDedication}
        />
        <label htmlFor="epigram">Epigram</label>
        <textarea
          id="epigram"
          name="epigram"
          rows="3"
          cols="33"
          ref={epigramField}
          defaultValue={poemEpigram}
        />
        <label htmlFor="epigram">Poem Id</label>
        <input
          id="poem-id"
          name="poemId"
          ref={poemIdField}
          defaultValue={poemId}
        />
        <select id="section-select" ref={sectionSelect}>
          <option value="">Section</option>
          <option value="spleenEtIdeal">Spleen et Idéal</option>
          <option value="tableauxParisiens">Tableaux Parisiens</option>
          <option value="leVin">Le Vin</option>
          <option value="fleursDuMal">Fleurs du Mal</option>
          <option value="revolte">Revolte</option>
          <option value="laMort">La Mort</option>
          <option value="toTheReader">To The Reader</option>
        </select>
        <label htmlFor="poemBody">Poem Body</label>
        <textarea
          id="poemBody"
          name="poemBody"
          rows="16"
          cols="33"
          ref={poemBodyField}
          defaultValue={convertArrayToBody(poemBody)}
        />
        <button type="submit" onClick={onSubmit}>
          {buttonLabel}
        </button>
        <button type="reset" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default PoemForm;

PoemForm.propTypes = {
  addPoem: PropTypes.func.isRequired,
  updatePoem: PropTypes.func.isRequired,
  edit: PropTypes.bool,
  _id: PropTypes.string,
  poemBody: PropTypes.arrayOf(PropTypes.string),
  poemDedication: PropTypes.string,
  poemTitleFrench: PropTypes.string,
  poemEpigram: PropTypes.string,
  poemNumber: PropTypes.string,
  poemSubTitle: PropTypes.string,
  poemTitle: PropTypes.string,
};

PoemForm.defaultProps = {
  edit: false,
  _id: '',
  poemBody: [''],
  poemDedication: '',
  poemEpigram: '',
  poemNumber: '',
  poemSubTitle: '',
  poemTitle: '',
  poemTitleFrench: '',
};
/* */

/* eslint no-param-reassign: off */
/* eslint no-use-before-define: off */

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { camelCase } from 'lodash';
import './PoemForm.scss';

const PoemForm = (props) => {
  const numberField = useRef(null);
  const titleField = useRef(null);
  const titleFieldTOC = useRef(null);
  const subTitleField = useRef(null);
  const sectionSelect = useRef(null);
  const frenchTitleField = useRef(null);
  const dedicationField = useRef(null);
  const epigramField = useRef(null);
  const poemBodyField = useRef(null);
  const poemIdField = useRef(null);
  const poemIndexField = useRef(null);
  const {
    _id,
    addPoem,
    edit,
    history,
    poemBody,
    poemDedication,
    poemEpigram,
    poemId,
    poemIndex,
    poemNumber,
    poemSection,
    poemSubTitle,
    poemTitle,
    poemTitleFrench,
    poemTitleTOC,
    updatePoem,
  } = props;

  useEffect(() => {
    sectionSelect.current.value = poemSection;
  }, [poemSection]);

  const onSubmit = (evt) => {
    evt.preventDefault();
    const pbArray = convertBodyToArray(poemBodyField.current.value);
    const poemData = {
      _id,
      poemBody: pbArray,
      poemDedication: dedicationField.current.value,
      poemEpigram: epigramField.current.value,
      poemId: edit
        ? poemIdField.current.value
        : camelCase(titleField.current.value),
      poemIndex: poemIndexField.current.value,
      poemNumber: numberField.current.value,
      poemSection: sectionSelect.current.value,
      poemSubTitle: subTitleField.current.value,
      poemTitle: titleField.current.value,
      poemTitleFrench: frenchTitleField.current.value,
      poemTitleTOC: titleFieldTOC.current.value,
    };

    if (!edit) {
      addPoem(poemData);
    } else {
      updatePoem(_id, poemData);
    }

    history.push(`/poems/${poemData.poemId}`);
  };

  const resetForm = () => {
    [
      dedicationField,
      epigramField,
      frenchTitleField,
      poemIndexField,
      numberField,
      poemBodyField,
      poemIdField,
      sectionSelect,
      subTitleField,
      titleField,
      titleFieldTOC,
    ].forEach((fieldRef) => {
      fieldRef.current.value = '';
    });
  };

  const convertBodyToArray = (poemBodyAsLongString) => {
    if (poemBodyAsLongString.indexOf('-Section-') !== 0) {
      return createArrayOfStrings(poemBodyAsLongString);
    }

    return createArrayOfObjects(poemBodyAsLongString);
  };

  const createArrayOfStrings = (bodyString) => {
    const poemBodyAsArray = bodyString.split(/\r?\n/g);
    const twoOrMoreSpaces = /( ){2,}/g;
    const startItalic = /(<em>)/g;
    const endItalic = /(<\/em>)/g;
    return poemBodyAsArray.map((line) => {
      return line
        .replace(twoOrMoreSpaces, ' ')
        .replace(startItalic, '\u003Cem\u003E')
        .replace(endItalic, '\u003C\u002Fem\u003E')
        .trim();
    });
  };

  const createArrayOfObjects = (bodyString) => {
    const sections = bodyString.split('-Section-');
    sections.shift();
    return sections.map((section) => {
      const sectionParts = section.split('|-|');
      return {
        poemSection: {
          sectionNumber: sectionParts[1],
          sectionTitle: sectionParts[2],
          sectionBody: createArrayOfStrings(sectionParts[4]),
        },
      };
    });
  };

  const convertArrayToBody = (poemBodyAsArray) => {
    if (poemBodyAsArray.length > 0) {
      if (typeof poemBodyAsArray[0] === 'string') {
        return convertArrayToStrings(poemBodyAsArray);
      }

      return convertMultiSectionPoem(poemBodyAsArray);
    }

    return '';
  };

  const convertArrayToStrings = (arrayOfStrings) => {
    return arrayOfStrings.reduce((a, b) => {
      return `${a}\u000A${b.toString()}`;
    });
  };

  const convertMultiSectionPoem = (arrayOfObjects) => {
    return arrayOfObjects.map((section) => {
      const { sectionNumber, sectionTitle, sectionBody } = section.poemSection;
      const secNumber = `|-|${sectionNumber || ''}`;
      const secTitle = `|-|${sectionTitle || ''}`;
      return `-Section-\u000A${secNumber}${secTitle}|-|\u000A|-|${convertArrayToStrings(
        sectionBody
      )}|-|\u000A\u000A`;
    });
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
        <label htmlFor="number">Index</label>
        <input
          type="number"
          id="index"
          name="index"
          ref={poemIndexField}
          defaultValue={poemIndex}
        />
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          ref={titleField}
          defaultValue={poemTitle}
        />
        <label htmlFor="title-TOC">Title: TOC</label>
        <input
          type="text"
          id="title-TOC"
          name="title-TOC"
          ref={titleFieldTOC}
          defaultValue={poemTitleTOC}
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
        <label htmlFor="section-select">Section</label>
        <select id="section-select" ref={sectionSelect}>
          <option value="">--Select One--</option>
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

export default withRouter(PoemForm);

PoemForm.propTypes = {
  _id: PropTypes.string,
  addPoem: PropTypes.func.isRequired,
  edit: PropTypes.bool,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  poemBody: PropTypes.arrayOf(PropTypes.any),
  poemDedication: PropTypes.string,
  poemEpigram: PropTypes.string,
  poemId: PropTypes.string,
  poemIndex: PropTypes.string,
  poemNumber: PropTypes.string,
  poemSection: PropTypes.string,
  poemSubTitle: PropTypes.string,
  poemTitle: PropTypes.string,
  poemTitleFrench: PropTypes.string,
  updatePoem: PropTypes.func.isRequired,
};

PoemForm.defaultProps = {
  _id: '',
  edit: false,
  poemBody: [''],
  poemDedication: '',
  poemEpigram: '',
  poemId: '',
  poemIndex: null,
  poemNumber: '',
  poemSection: '',
  poemSubTitle: '',
  poemTitle: '',
  poemTitleFrench: '',
};
/* */

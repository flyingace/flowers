/*eslint no-underscore-dangle: off */
import axios from 'axios';

/*
 * action types
 */
export const ADD_ALL_POEMS = 'ADD_ALL_POEMS';
export const SET_TARGET_POEM = 'SET_TARGET_POEM';

/*
 * action creators
 */
export function requestAllPoems() {
  return (dispatch) => {
    axios
      .get('http://flowersofbad.herokuapp.com/api/poems')
      .then((resp) => {
        dispatch(addAllPoems(resp.data));
      })
      .catch((err) => console.log(err));
  };
}

function addAllPoems(poems) {
  return {
    type: ADD_ALL_POEMS,
    poems,
  };
}

export function getPoemById(poemId) {
  return (dispatch, getState) => {
    const targetPoem = getState().PoemData.poems.find(
      (poem) => poem.poemId === poemId
    );

    if (targetPoem) {
      dispatch(setTargetPoem(targetPoem));
    }
  };
}

function setTargetPoem(targetPoem) {
  return {
    type: SET_TARGET_POEM,
    targetPoem,
  };
}

export function addPoem(poemData) {
  return (dispatch) => {
    axios
      .post('http://flowersofbad.herokuapp.com/api/poems', poemData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
        dispatch(requestAllPoems());
      })
      .catch((err) => console.log(err));
  };
}

export function updatePoem(poemId, poemData) {
  return (dispatch) => {
    axios
      .put(`http://flowersofbad.herokuapp.com/api/poems/${poemId}`, poemData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(() => dispatch(requestAllPoems()))
      .catch((err) => console.log(err));
  };
}

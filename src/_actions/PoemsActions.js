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

export function getPoemById(id = '5cf882dd88793d0017780a54') {
  return (dispatch, getState) => {
    const targetPoem = getState().PoemData.poems.find(
      (poem) => poem._id === id
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
  axios
    .post('http://flowersofbad.herokuapp.com/api/poems', poemData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(() => requestAllPoems())
    .catch((err) => console.log(err));
}

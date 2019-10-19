import { ADD_ALL_POEMS, SET_TARGET_POEM } from '../_actions/PoemsActions';

const initialState = {
  poems: [],
  targetPoem: {
    _id: null,
    poemBody: [],
    poemDedication: '',
    poemEpigram: '',
    poemId: '',
    poemIndex: null,
    poemNumber: '',
    poemSection: '',
    poemSubTitle: '',
    poemTitle: '',
    poemTitleFrench: '',
    poemTitleTOC: '',
  },
};

export default function PoemData(state = initialState, action) {
  switch (action.type) {
    case ADD_ALL_POEMS:
      return Object.assign({}, state, { poems: action.poems });
    case SET_TARGET_POEM:
      return Object.assign({}, state, { targetPoem: action.targetPoem });
    default:
      return state;
  }
}

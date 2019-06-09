import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PoemsActions from '../_actions/PoemsActions';
import Poem from '../components/Poem/Poem';

function mapStateToProps(state) {
  return {
    poems: state.PoemData.poems,
    targetPoem: state.PoemData.targetPoem,
    poemNumber: state.PoemData.targetPoem.poemNumber,
    poemTitle: state.PoemData.targetPoem.poemTitle,
    poemSubTitle: state.PoemData.targetPoem.poemSubTitle,
    poemDedication: state.PoemData.targetPoem.poemDedication,
    poemEpigram: state.PoemData.targetPoem.poemEpigram,
    poemBody: state.PoemData.targetPoem.poemBody,
  };
}

function mapDispatchToProps(dispatch) {
  const combinedActions = Object.assign({}, PoemsActions);
  return bindActionCreators(combinedActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Poem);

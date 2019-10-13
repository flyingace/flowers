import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PoemsActions from '../_actions/PoemsActions';
import Poem from '../components/Poem/Poem';

function mapStateToProps(state, ownProps) {
  return {
    poemBody: state.PoemData.targetPoem.poemBody,
    poemDedication: state.PoemData.targetPoem.poemDedication,
    poemEpigram: state.PoemData.targetPoem.poemEpigram,
    poemId: ownProps.match.params.poemId,
    poemIndex: state.PoemData.targetPoem.poemIndex,
    poemNumber: state.PoemData.targetPoem.poemNumber,
    poems: state.PoemData.poems,
    poemSubTitle: state.PoemData.targetPoem.poemSubTitle,
    poemTitle: state.PoemData.targetPoem.poemTitle,
    targetPoem: state.PoemData.targetPoem,
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

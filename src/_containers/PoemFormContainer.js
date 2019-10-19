import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PoemsActions from '../_actions/PoemsActions';
import PoemForm from '../components/PoemForm/PoemForm';

function mapStateToProps(state, ownProps) {
  return {
    // eslint-disable-next-line no-underscore-dangle
    _id: state.PoemData.targetPoem._id,
    edit: ownProps.edit,
    poemBody: state.PoemData.targetPoem.poemBody,
    poemDedication: state.PoemData.targetPoem.poemDedication,
    poemEpigram: state.PoemData.targetPoem.poemEpigram,
    poemId: state.PoemData.targetPoem.poemId,
    poemIndex: state.PoemData.targetPoem.poemIndex,
    poemNumber: state.PoemData.targetPoem.poemNumber,
    poems: state.PoemData.poems,
    poemSection: state.PoemData.targetPoem.poemSection,
    poemSubTitle: state.PoemData.targetPoem.poemSubTitle,
    poemTitle: state.PoemData.targetPoem.poemTitle,
    poemTitleFrench: state.PoemData.targetPoem.poemTitleFrench,
    poemTitleTOC: state.PoemData.targetPoem.poemTitleTOC,
  };
}

function mapDispatchToProps(dispatch) {
  const combinedActions = Object.assign({}, PoemsActions);
  return bindActionCreators(combinedActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PoemForm);

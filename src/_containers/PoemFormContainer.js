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
    poemNumber: state.PoemData.targetPoem.poemNumber,
    poems: state.PoemData.poems,
    poemSubTitle: state.PoemData.targetPoem.poemSubTitle,
    poemTitle: state.PoemData.targetPoem.poemTitle,
    poemTitleFrench: state.PoemData.targetPoem.poemTitleFrench,
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

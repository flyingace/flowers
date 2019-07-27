import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PoemsActions from '../_actions/PoemsActions';
import Navigation from '../components/Navigation/Navigation';

function mapStateToProps(state) {
  return {
    poemId: state.PoemData.targetPoem.poemId,
  };
}

function mapDispatchToProps(dispatch) {
  const combinedActions = Object.assign({}, PoemsActions);
  return bindActionCreators(combinedActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);

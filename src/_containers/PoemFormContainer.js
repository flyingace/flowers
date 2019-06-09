import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PoemsActions from '../_actions/PoemsActions';
import PoemForm from '../components/PoemForm/PoemForm';

function mapStateToProps(state) {
  return {
    poems: state.PoemData.allPoems,
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
)(PoemForm);

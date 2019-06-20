import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PoemsActions from '../_actions/PoemsActions';
import Landing from '../components/Landing/Landing';

function mapStateToProps(state) {
  return {
    poems: state.PoemData.poems,
  };
}

function mapDispatchToProps(dispatch) {
  const combinedActions = Object.assign({}, PoemsActions);
  return bindActionCreators(combinedActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);

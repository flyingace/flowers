import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PoemsActions from '../_actions/PoemsActions';
import Navigation from '../components/Navigation/Navigation';
import { TOCData } from '../_selectors/selectors';

function mapStateToProps(state) {
  return {
    poemId: state.PoemData.targetPoem.poemId,
    tocData: TOCData(state),
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

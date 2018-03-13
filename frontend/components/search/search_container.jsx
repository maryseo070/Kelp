import { connect } from 'react-redux';
import Search from './search';
// import {fetchReefs} from '../../action/reef_actions.js'

const mapStateToProps = state => {
  return {
    reefs: Object.values(state.entities.reefs)
  }
};

const mapDispatchToProps = dispatch => {
  // fetchReefs: () => dispatch(fetchReefs())
};

export default connect(
  mapStateToProps,
  null
)(Search);

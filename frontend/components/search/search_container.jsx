import { connect } from 'react-redux';
import Search from './search';
import {fetchReefs} from '../../actions/reef_actions.js';

const mapStateToProps = state => {
  return {
    reefs: Array(state.entities.reefs)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReefs: () => dispatch(fetchReefs())
  };
};

export default connect(
  mapStateToProps,
  null
)(Search);

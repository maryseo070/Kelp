import {connect} from 'react-redux';
import ReefSearch from './reef_search';
import { searchReefs, fetchReefs } from '../../actions/reef_actions';

const msp = (state) => {
  return {
    reefs: Object.values(state.entities.reefs)
  };
};

const mdp = dispatch => {
  return {
    searchReefs: (input) => dispatch(searchReefs(input)),
    fetchReefs: () => dispatch(fetchReefs())
  };
};

export default connect(msp, mdp)(ReefSearch);

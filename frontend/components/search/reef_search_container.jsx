import {connect} from 'react-redux';
import ReefSearch from './reef_search';
import { searchReefs } from '../../actions/reef_actions';

const msp = (state) => {
  return {
    reefs: Object.values(state.entities.reefs)
  };
};

const mdp = dispatch => {
  return {
    searchReefs: (input) => dispatch(searchReefs(input))
  };
};

export default connect(msp, mdp)(ReefSearch);

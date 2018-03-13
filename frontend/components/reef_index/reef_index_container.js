import { fetchReefs } from '../../actions/reef_actions.js';
import {connect} from 'react-redux';
import ReefIndex from './reef_index.jsx';

const msp = (state) => {
  return {
    reefs: Object.values(state.entities.reefs)
  };
};

const mdp = dispatch => {
  return{
    fetchReefs: () => dispatch(fetchReefs())
  };
};

export default connect(msp, mdp)(ReefIndex);

import React from 'react';
import {connect} from 'react-redux';
import {fetchReef} from '../../actions/reef_actions.js';
import ReefShow from './reef_show';

const msp = (state, ownProps) =>{
  return {
    bench: state.reef
  };
};


const mdp = (dispatch) => {
  return {
    fetchReef: id => dispatch(fetchReef(id))
  };
};

export default connect(msp, mdp)(ReefShow);

import React from 'react';
import {createReview, fetchReef} from '../../actions/reef_actions.js';
import {connect} from 'react-redux';
import ReviewForm from './review_form.jsx';

const msp = (state, ownProps) => {
  // debugger
  return {
    reef: state.entities.reefs[ownProps.match.params.reefId]
  };
};

const mdp = (dispatch) => {
  return {
    fetchReef: (id) => dispatch(fetchReef(id)),
    createReview: (review) => dispatch(createReview(review))
  };
};

export default connect(msp, mdp)(ReviewForm);

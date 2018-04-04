import React from 'react';
import {createReview, fetchReef, createPhoto} from '../../actions/reef_actions.js';
import {connect} from 'react-redux';
import ReviewForm from './review_form.jsx';

const msp = (state, ownProps) => {
  // debugger
  return {
    reef: state.entities.reefs[ownProps.match.params.reefId],
    currentUser: state.session.currentUser,
    errors: state.errors.review
  };
};

const mdp = (dispatch) => {
  return {
    fetchReef: (id) => dispatch(fetchReef(id)),
    createReview: (review) => dispatch(createReview(review)),
    createPhoto: (photo) => dispatch(createPhoto(photo))
  };
};

export default connect(msp, mdp)(ReviewForm);

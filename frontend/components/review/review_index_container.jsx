import React from 'react';
import { connect } from 'react-redux';
import { fetchReviews } from '../../actions/review_actions.js';
import ReviewIndex from './review_index.jsx'


const msp = (state) => {
  return {
    reviews: state.entities.reviews
  }
}

const mdp = (dispatch) => {
  return {
    fetchReviews: () => dispatch(fetchReviews())
  };
};

export default connect(msp, mdp)(ReviewIndex);

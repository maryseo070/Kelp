import React from 'react';
import * as ReviewApiUtil from '../util/review_api_util.js';

// export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';


export const receiveReviews = reviews => {
  return {
    type: RECEIVE_REVIEWS,
    reviews
  };
};


export const fetchReviews = (reefId) => dispatch => {
  return ReviewApiUtil.fetchReviews(reefId).then(
    (reviews) => dispatch(receiveReviews(reviews)))
};

import * as ReefApiUtil from "../util/reef_api_util.js";
export const RECEIVE_REEFS = "RECEIVE_REEFS";
export const RECEIVE_REEF = "RECEIVE_REEF";
export const RECEIVE_REEF_ERRORS = "RECEIVE_REEF_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_POST = "RECEIVE_POST";

export const receivePost = (post) => {
  return {
    type: RECEIVE_POST,
    data: {post}
  };
};


export const createPhoto = (formData) => dispatch => {
  return ReefApiUtil.createPhoto(formData).then(
    (post) => dispatch(receivePost(post)),
    errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const receiveReview = (review) => {
  return {
    type: RECEIVE_REVIEW,
    review
  };
};

export const createReview = (review) => dispatch => {
  return ReefApiUtil.createReview(review).then(
    (review) => dispatch(receiveReview(review)));
};


export const clearErrors = (errors) => {
  return {
    type: CLEAR_ERRORS,
    errors: []
  };
};

export const receiveReefErrors = (errors) => {
  return {
    type: RECEIVE_REEF_ERRORS,
    errors
  };
};

export const receiveReefs = reefs => {
  return {
    type: RECEIVE_REEFS,
    reefs
  };
};

export const receiveReef = payload => {
  return {
    type: RECEIVE_REEF,
    payload
  };
};

export const fetchReefs = () => dispatch => {

  return ReefApiUtil.fetchReefs().then(
    reefs => dispatch(receiveReefs(reefs)),
    errors => console.log("could not fetch reefs ~ reef-actions")
  );
};

export const fetchReef = id => dispatch => {
  return ReefApiUtil.fetchReef(id).then(
    payload => dispatch(receiveReef(payload)));
};

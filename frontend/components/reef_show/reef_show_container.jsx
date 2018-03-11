import React from "react";
import { connect } from "react-redux";
import { fetchReef } from "../../actions/reef_actions.js";
import ReefShow from "./reef_show";
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
  return {
    reef: state.entities.reefs[ownProps.match.params.reefId],
    currentUser: state.session.currentUser,
    errors: state.errors.session,
    reviews: state.entities.reviews
  };
};

const mdp = dispatch => {
  return {
    fetchReef: id => dispatch(fetchReef(id))
  };
};

export default withRouter(connect(msp, mdp)(ReefShow));

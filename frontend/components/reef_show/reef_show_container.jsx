import React from "react";
import { connect } from "react-redux";
import { fetchReef } from "../../actions/reef_actions.js";
import ReefShow from "./reef_show";
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
  return {
    reef: state.entities.reefs[ownProps.match.params.reefId],
    reefs: state.entities.reefs,
    currentUser: state.session.currentUser,
    errors: state.errors.session,
    reviews: Object.values(state.entities.reviews),
    authors: state.entities.authors
  };
};

const mdp = dispatch => {
  return {
    fetchReef: id => dispatch(fetchReef(id))
  };
};

export default withRouter(connect(msp, mdp)(ReefShow));

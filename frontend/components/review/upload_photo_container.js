import React from 'react';
import {createPhoto, fetchReef} from '../../actions/reef_actions.js';
import {connect} from 'react-redux';
import UploadPhotoForm from './upload_photo_form.jsx'


const msp = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    reef: state.entities.reefs[ownProps.match.params.reefId]
  };
};

const mdp = (dispatch) => {
  return {
    createPhoto: (photo) => dispatch(createPhoto(photo)),
    fetchReef: (id) => dispatch(fetchReef(id))
  }
}

export default connect(msp, mdp)(UploadPhotoForm);

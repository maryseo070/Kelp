import * as ReefApiUtil from '../util/reef_api_util.js';
export const RECEIVE_REEFS = "RECEIVE_REEFS";
export const RECEIVE_REEF = "RECEIVE_REEF";


export const receiveReefs = reefs => {
  return ({
    type: RECEIVE_REEFS,
    reefs
  });
};

export const receiveReef = reef => {
  return ({
    type: RECEIVE_REEF,
    reef
  });
};

export const fetchReefs = () => dispatch => {
  return ReefApiUtil.fetchReefs().then(
    (reefs) => dispatch(receiveReefs(reefs)));
};

export const fetchReef = (id) => dispatch => {
  return ReefApiUtil.fetchReef(id).then(
    (reef) =>  dispatch(receiveReef(reef)));
};

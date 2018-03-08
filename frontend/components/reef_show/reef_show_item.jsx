import React from 'react';
import ReefShowContainer from './reef_show_container';

const ReefShowItem = ({reef}) => {
    return (
      <div>

      <div className="biz-page-header">

        <div className="general-info-box">
          <h1 className="show-title">{reef.name}</h1>
        </div>

        <div className="show-buttons">
          <button className="review-button">Write A Review</button>
        </div>

      </div>

      <div className="showcase-container" >
        <img className="reef-pic" src={window.reef1} />
        <img className="reef-pic" src={window.reef3} />
      </div>

      </div>
    )
}
export default ReefShowItem;

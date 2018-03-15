import React from 'react';
import {Link} from 'react-router-dom';


  const ratingStars = (n) => {
    if (n === 5) {
      return (
        <div className='icon-five'></div>
      );
    }
    else if (n === 4) {
      return (
        <div className='icon-four'></div>
      );
    }
    else if (n === 3) {
      return (
        <div className='icon-three'></div>
      );
    }
    else if (n === 2) {
      return (
        <div className='icon-two'></div>
      );
    }
    else if (n === 1) {
      return (
        <div className='icon-one'></div>
      );
    }
}


const ReefIndexItem = ({reef}) => {
  let indexItem;
  if (reef) {
    indexItem =
    <div className="index-items">
      <div className="ii-content-and-ll">
        {
          reef.photo ? <img className="ii-sample-pic" src={reef.photo} /> : null
        }


      <div className='ii-content'>

        <div className="ii-left">
          <Link to={`/reefs/${reef.id}`} className="ii-name"  >{reef.name}</Link>
          <div className="ii-revs-ratings">
            <div className="ii-rating">{ratingStars(Math.round(reef.avg_rating))}</div>
            <div className="ii-rev-preview">{reef.review_count} Reviews</div>
          </div>
        </div>



        <div className="ii-preview">
          <img className="blank-profile-pic" src={window.blank}/>
          <div className="ii-review">{reef.review_preview}...</div>
        </div>
      </div>

      <div className="ii-lat-lng">
        <div className="lat">Latitude: {reef.lat}</div>
        <div className="lng">Longitude: {reef.lng}</div>
      </div>
    </div>

    </div>
  }
  return (
    indexItem
  );
};

export default ReefIndexItem;

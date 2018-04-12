import React from 'react';
import {Link} from 'react-router-dom';

class HomeBottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.ratingStars = this.ratingStars.bind(this);
  }

 ratingStars(n) {
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


  render (){
    let reefs;
    let reefInfo;
    if (this.props.reefs) {
      reefs = this.props.reefs;
      reefInfo = reefs.map((reef) => {
        return (
            <ul className="ul-three-show-items">
              <img src={reef.photo} className="home-item-photo"></img>
              <div className="home-bottom-info">
                <Link className="li-link" to={`/reefs/${reef.id}`}>{reef.name}</Link>
                <div className="li-stars-and-reviews">
                  <li>{this.ratingStars(Math.floor(reef.avg_rating))}</li>
                  <li className="li-review-count">{reef.review_count} Reviews</li>
                </div>
                <li>{reef.continent}</li>
              </div>
            </ul>
      );
    });
    }

    return(
      <div className="home-bottom-all">
        <h3 className="kelp-centered">Kelp Manhattan</h3>
        <div className="home-bottom-items">
          {reefInfo}
        </div>
      </div>
    );
  }
}

export default HomeBottom;

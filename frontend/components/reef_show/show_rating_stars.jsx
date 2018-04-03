import React from 'react';
import ReefShowContainer from './reef_show_container';

class ShowRatingStars extends React.Component {
  constructor(props) {
    super(props);
    this.ratingStars = this.ratingStars.bind(this);
  }
  componentDidMount () {
    // console.log(this.props)
  }
  ratingStars(n) {
    if (n === 5) {
      return (
        <div className='show-star-5'></div>
      );
    }
    else if (n === 4) {
      return (
        <div className="show-star-4"></div>
      );
    }
    else if (n === 3) {
      return (
        <div className="show-star-3"></div>
      );
    }
    else if (n === 2) {
      return (
        <div className="show-star-2"></div>
      );
    }
    else if (n === 1) {
      return (
        <div className="show-star-1"></div>
      );
    }
  }

  render() {
    // debugger
    let avgRating = this.props.reef[0].avg_rating;
    // debugger
    if (avgRating) {
      avgRating = Math.round(avgRating);
    }
    return (
      <div>
        {this.ratingStars(avgRating)}
      </div>
    );
  }
}

export default ShowRatingStars;

import React from 'react';
import {Link} from 'react-router-dom';


class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
    this.reviewIndexItem = this.reviewIndexItem.bind(this);
    this.ratingStars = this.ratingStars.bind(this);
  }

  // this.props.reviews.map((review) => (Array(review.photos).map(
  //   (photo) => console.log(photo.image_url))));
  // componentDidMount() {
  //   let pic;
  //   this.props.reviews.map((review) => (Array(review.photos).map(
  //     (photo) => pic = ( <img scr={photo.image_url} />))));
  // }

  ratingStars (n) {
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

  reviewIndexItem () {

    let reviews;
    if (this.props.reef) {
      reviews = (this.props.reviews).map( (review) =>

      <ul className="review-all" key={Math.floor(Math.random() * 500)}>
        <ul className="user-box">
          <img className="fish-profile" src={window.fish1} />
          <div className="user-snippet">
            <li className="username">{review.author.first_name}</li>
            <div className="user-location">New York, NY</div>
          </div>
        </ul>

        <div className="rev-right">
          <ul className="rating-date">
            <div className="rating-static">{this.ratingStars(review.rating)}</div>

            <div>{review.date}</div>
          </ul>

          <div className='rev-body'>{review.body}</div>
        </div>
        {
          Array(review.photos).map((photo) =>
          <img className="rev-pic" key={Math.floor(Math.random() * 500)} src={photo.image_url} /> )
        }

      </ul>
    );
  }

    return (
      <div>{reviews}</div>
    );
  }

  render () {
    return (
      <div key={Math.floor(Math.random() * 500)}>{this.reviewIndexItem()}</div>
    );
  }
}


export default ReviewIndex;

// {
  // Array(review.photos).map((photo) =>
  // <img className="rev-pic" key={Math.floor(Math.random() * 500)} src={photo.image_url} /> )
// }

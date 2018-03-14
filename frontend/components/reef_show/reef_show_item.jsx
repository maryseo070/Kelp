import React from 'react';
import ReefShowContainer from './reef_show_container';
import ReviewIndex from './review_index';
import { Route } from 'react-router';
import {Link} from 'react-router-dom';
import SearchContainer from '../search/search.jsx';



class ReefShowItem extends React.Component {
  constructor(props){
    super(props);
    this.grow = this.grow.bind(this);
    this.shrink = this.shrink.bind(this);
    this.reviewIndex = this.reviewIndex.bind(this);
  }

  componentDidMount() {

  }

  grow(e) {
    $(e.target).addClass("reef-pic-big");
  }

  shrink(e){
    $(e.target).removeClass("reef-pic-big");
  }


  reefRightNav () {
    return (
      <div className="right-nav">
        <h1 className="right-nav-title">More Reef Info</h1>
        <ul className="right-nav-list">
          <li className="right-nav-list-items">Takes Reservations</li>
          <li className="right-nav-list-items">Accepts Credit Cards</li>
          <li className="right-nav-list-items">Gender Inclusive Bathrooms</li>
          <li className="right-nav-list-items">Happy Hour</li>
          <li className="right-nav-list-items">Wi-Fi</li>
          <li className="right-nav-list-items">Has Pool Table</li>
        </ul>
      </div>
    );
  }
  writeReviewButton() {
    return(
      <div className="show-buttons">
        <Link to={`/reefs/${this.props.reefId}/writeReview`} className="review-button">Write a Review</Link>
      </div>
    );
  }

  reviewIndex () {
    // debugger
    let reviews;

    if (this.props.reviews) {
      reviews = Object.values(this.props.reviews);
    }
    return (
      <div className="review-index">
        <ReviewIndex authors={this.props.authors} reef={this.props.reef} reviews={this.props.reviews} key={this.props.reef.id}/>
      </div>
    );
  }

  displayPhotos () {
    let pics = [];
    if (this.props.reviews) {
      this.props.reviews.map( (review) => (
        review.photos.image_url ? pics.push(review.photos.image_url) : null
      ));
    }
      return (
      <div className='show-imgs'>
        <img className="reef-pic-small" onMouseEnter={this.grow} onMouseLeave={this.shrink} src={pics[0]} />
        <img className="reef-pic-default" onMouseEnter={this.grow} onMouseLeave={this.shrink} src={pics[1]} />
        <img className="reef-pic-small" onMouseEnter={this.grow} onMouseLeave={this.shrink} src={pics[2]} />
      </div>
    );
  }


  // return pics.map((pic) => (
  //   <img className="reef-pic-small" onMouseEnter={this.grow} onMouseLeave={this.shrink} src={pic} />
  // ))

  render () {
    // debuggers

    return (
      <div className="top-shelf">

      <div className="biz-page-header">

        <div className="general-info-box">
          <h1 className="show-title">{this.props.reef.name}</h1>
        </div>

      {this.writeReviewButton()}

      </div>


      <div className="showcase-container" >

        <SearchContainer className='show-map'reefs={this.props.reefs}/>

          {this.displayPhotos()}

      </div>

      <h3 className="rev-title"> Recommended Reviews for the {this.props.reef.name}</h3>

      <div className="show-bottom">
        <div>{this.reviewIndex()}</div>
        <div className="reef-right-nav">{this.reefRightNav()}</div>
      </div>

      </div>
    );
  }

}


export default ReefShowItem;
//
// <img className="reef-pic-small" onMouseEnter={this.grow} onMouseLeave={this.shrink} src={window.reef1} />
// <img className="reef-pic-default" onMouseEnter={this.grow} onMouseLeave={this.shrink} src={window.reef3} />
// <img className="reef-pic-small" onMouseEnter={this.grow} onMouseLeave={this.shrink} src={window.reef4} />

import React from 'react';
import ReefShowContainer from './reef_show_container';
import ReviewIndexContainer from '../review/review_index_container.jsx'

class ReefShowItem extends React.Component {
  constructor(props){
    super(props)
    this.grow = this.grow.bind(this)
    this.shrink = this.shrink.bind(this)
    this.reviewIndex = this.reviewIndex.bind(this)
  }
  componentDidMount () {
    // debugger
  }
  grow(e) {
    $(e.target).addClass("reef-pic-big");
  }

  shrink(e){
    $(e.target).removeClass("reef-pic-big")
  }


  reefRightNav () {
    return (
      <div className="reef-right-nav">
        <h1>REEF RIGHT NAV</h1>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
      </div>
    )
  }

  reviewIndex () {
    return (
      <div className="review-index">
        <ReviewIndexContainer reefId={this.props.reef.id} />
      </div>
    )
  }

  render () {
    // debugger
    return (
      <div className="top-shelf">

      <div className="biz-page-header">

        <div className="general-info-box">
          <h1 className="show-title">{this.props.reef.name}</h1>
        </div>

        <div className="show-buttons">
          <button className="review-button">Write A Review</button>
        </div>

      </div>


      <div className="showcase-container" >
        <div className='show-map'>
        </div>
        <div className='show-imgs'>
          <img className="reef-pic-small" onMouseEnter={this.grow} onMouseLeave={this.shrink} src={window.reef1} />
          <img className="reef-pic-default" onMouseEnter={this.grow} onMouseLeave={this.shrink} src={window.reef3} />
          <img className="reef-pic-small" onMouseEnter={this.grow} onMouseLeave={this.shrink} src={window.reef4} />
        </div>
      </div>

      <h3 className="rev-title"> Recommended Reviews for the {this.props.reef.name}</h3>

      <div className="show-bottom">
        <div>{this.reviewIndex()}</div>
        <div>{this.reefRightNav()}</div>
      </div>

      </div>
    )
  }

}


export default ReefShowItem;

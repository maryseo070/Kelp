import React from 'react';
import ReefShowContainer from './reef_show_container';

class ReefShowItem extends React.Component {
  constructor(props){
    super(props)
    this.grow = this.grow.bind(this)
    this.shrink = this.shrink.bind(this)
    this.state = {
      hi: "pic-2"
    };
  }

  grow(e) {
    // debugger
    $(e.target).addClass("reef-pic-big");
    this.setState({hi: e.target.hi})
    // debugger
  }

  shrink(e){
    // debugger
    if (this.state.hi !== "pic-2") {
      $(e.target).removeClass("reef-pic-big")
      this.setState({hi: "pic-2"})
    // debugger
    }
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
        <h1>REVIEW INDEX</h1>
      </div>
    )
  }

  render () {
    return (
      <div className="top-shelf">

      <div className="biz-page-header">

        <div className="general-info-box">
          <h1 className="show-title">{reef.name}</h1>
        </div>

        <div className="show-buttons">
          <button className="review-button">Write A Review</button>
        </div>

      </div>


      <div className="showcase-container" >
        <div className='show-map'>
        </div>
        <div className='show-imgs'>
          <img hi="pic-1" className="reef-pic-small" onMouseEnter={this.grow} onMouseLeave={this.shrink} src={window.reef1} />
          <img hi="pic-2" className="reef-pic-small" onMouseEnter={this.grow} onMouseLeave={this.shrink} src={window.reef3} />
          <img hi="pic-3" className="reef-pic-small" onMouseEnter={this.grow} onMouseLeave={this.shrink} src={window.reef4} />
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

// const ReefShowItem = ({reef}) => {
//     return (
//       <div className="top-shelf" >
//
//       <div className="biz-page-header">
//
//         <div className="general-info-box">
//           <h1 className="show-title">{reef.name}</h1>
//         </div>
//
//         <div className="show-buttons">
//           <button className="review-button">Write A Review</button>
//         </div>
//
//       </div>
//
//       <div className='show-map'>
//         <div>
//         </div>
//       </div>
//
//       <div className="showcase-container" >
//         <img className="reef-pic" src={window.reef1} />
//         <img className="reef-pic" src={window.reef3} />
//         <img className="reef-pic" src={window.reef4} />
//       </div>
//
//       </div>
//     )
// }

export default ReefShowItem;

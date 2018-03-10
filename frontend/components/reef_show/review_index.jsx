import React from 'react';
import {Link} from 'react-router-dom';


class ReviewIndex extends React.Component {
  constructor(props) {
    super(props)
    // this.reviewIndexItem = this.reviewIndexItem.bind(this)
  }

  reviewIndexItem () {
    // debugger
    //props: reefID, reviews
    return (
      <div>
        <div>REVIEW INDEX ITEM RENDERING</div>
        <div>{this.props.reviews}</div>
      </div>
    )
  }
  render () {
    return (
      <div>
        <div>{this.reviewIndexItem()}</div>
      </div>
    )
  }
}
// {this.reviewIndexItem()}

export default ReviewIndex;

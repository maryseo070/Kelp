import React from 'react';
import {Link} from 'react-router-dom';
import ReviewIndexItem from './review_index_item.jsx'


// const ReviewIndex = () => {
//   return (
//     <div>
//       <ReviewIndexItem />
//     </div>
//   )
// }
//
// export default ReviewIndex;

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount () {
    this.props.fetchReviews(this.props.reefId);
    // debugger
  }
  render () {
    return (
      <div>
        <ReviewIndexItem />
      </div>
    )
  }
}

export default ReviewIndex;

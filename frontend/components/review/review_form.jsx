import React from 'react';
import {Link} from 'react-router-dom';


class ReviewForm extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount () {
    this.props.fetchReef(this.props.match.params.reefId);
    // debugger
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  render () {
    // debugger
    let reefName;
    let reefId;
    if (this.props.reef) {
      reefName = this.props.reef.name;
      reefId = this.props.reef.id;
    }
    return (
      <div>
        <div className="rev-header-wrapper">
          <a href="/" className="rev-form-logo" >Kelp</a>
          <div className="rev-heading">Write a Review</div>

          <div className='rev-buttons'>
            <Link to="/login" className="rev-link1" >Log In</Link>
            <Link to="/signup" className="rev-link2" >Sign Up</Link>
          </div>
        </div>

        <Link to={`/reefs/${reefId}`}>{reefName}</Link>

        <form>
          <input className="rev-text" type="textbox"/>
          <input type="radio" name="rating" id="rating-1" value="1" />
        </form>
      </div>
    );
  }
}

export default ReviewForm;

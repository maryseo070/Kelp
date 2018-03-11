import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: "",
      date: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  componentDidMount () {
    this.props.fetchReef(this.props.match.params.reefId);
    // debugger
  }

  // componentDidUpdate() {
  //   console.log(this.props);
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state).then( () => this.props.history.push('/'));
  }

  updateBody(e){
    this.setState({body: e.target.value});
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

        <Link to={`/reefs/${reefId}`} className="rev-reef-title">{reefName}</Link>

        <form onSubmit={this.handleSubmit}>
          <input className="rev-text" type="textbox" value={this.state.body} onChange={this.updateBody}/>
            <div class="rating rating-1">
              <i class="star-1">★</i>
              <i class="star-2">★</i>
              <i class="star-3">★</i>
              <i class="star-4">★</i>
              <i class="star-5">★</i>
            </div>

            <div class="rating rating-2">
              <i class="star-1">★</i>
              <i class="star-2">★</i>
              <i class="star-3">★</i>
              <i class="star-4">★</i>
              <i class="star-5">★</i>
            </div>

            <div class="rating rating-3">
              <i class="star-1">★</i>
              <i class="star-2">★</i>
              <i class="star-3">★</i>
              <i class="star-4">★</i>
              <i class="star-5">★</i>
            </div>

            <div class="rating rating-4">
              <i class="star-1">★</i>
              <i class="star-2">★</i>
              <i class="star-3">★</i>
              <i class="star-4">★</i>
              <i class="star-5">★</i>
            </div>

            <div class="rating rating-5">
              <i class="star-1">★</i>
              <i class="star-2">★</i>
              <i class="star-3">★</i>
              <i class="star-4">★</i>
              <i class="star-5">★</i>
            </div>
          <input type="submit" value="Post Review"></input>
        </form>
      </div>
    );
  }
}

export default withRouter(ReviewForm);

import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import {merge} from 'lodash';
// import * as ApiUtil from '../../util/reef_api_utils.js';


class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: "",
      date: "",
      rating: "",
      imageUrl: "",
      imageFile: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.ratingStars = this.ratingStars.bind(this);
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  componentDidMount () {
    this.props.fetchReef(this.props.match.params.reefId);
    // debugger
  }


  handleSubmit(e) {
    e.preventDefault();
    const file = this.state.imageFile;
    const review = new FormData();

    const reefId = this.props.reef.id;
    review.append("review[photos_attributes][][image]", file);
    review.append("review[body]", this.state.body);
    review.append("review[rating]", this.state.rating);
    review.append("review[date]", this.state.date);
    review.append("review[reef_id]", reefId);
    this.props.createReview(review).then( () => this.props.history.push('/'));
  }

  updateField(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }


  updateFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ imageUrl: reader.result, imageFile: file});

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }


  ratingStars() {

      return (
        <div className="rating-stars">
          <option onClick={this.updateField("rating")} className="star-1" value="1" >★</option>
          <option onClick={this.updateField("rating")} className="star-2" value="2" >★</option>
          <option onClick={this.updateField("rating")} className="star-3" value="3" >★</option>
          <option onClick={this.updateField("rating")} className="star-4" value="4" >★</option>
          <option onClick={this.updateField("rating")} className="star-5" value="5" >★</option>
        </div>
      );
    }


  render () {

    let reefName;
    let reefId;

    if (this.props.reef) {
      reefName = this.props.reef.name;
      reefId = this.props.reef.id;
    }
    return (
      <div>
        <div className="rev-header-wrapper">
          <a href="/" className="kelp-logo" >
            <img className="thanks-elliot"src={window.logo} />
          </a>
          <div className="rev-heading">Write a Review</div>

          <div className='rev-buttons'>
            <Link to="/login" className="rev-link1" >Log In</Link>
            <Link to="/signup" className="rev-link2" >Sign Up</Link>
          </div>
        </div>

        <div className="rev-form-body">
          <div className="rev-reef-title">
            <Link className="reef-name" to={`/reefs/${reefId}`}>{reefName}</Link>
          </div>

          <form className="rev-form" onSubmit={this.handleSubmit}>


            {this.ratingStars()}
            <div className="rev-form-date">
              <input autoComplete="on" type="date" value={this.state.date} onChange={this.updateField("date")}/>
            </div>

            <input className="rev-text" type="textbox" value={this.state.body} onChange={this.updateField("body")}/>
            <div>
              <input type="file" onChange={this.updateFile}></input>
            </div>

            <input className="rev-form-submit" type="submit" value="Post Review"></input>

          </form>

        </div>

      </div>
    );
  }
}

export default withRouter(ReviewForm);



  //   <i onClick={this.updateRating("rating")} value="2" onMouseEnter={this.colorChange} className="star-2">★</i>
  //   <i onClick={this.updateRating("rating")} value="3" onMouseEnter={this.colorChange} className="star-3">★</i>
  //   <i onClick={this.updateRating("rating")} value="4" onMouseEnter={this.colorChange} className="star-4">★</i>
  //   <i onClick={this.updateRating("rating")} value="5" onMouseEnter={this.colorChange} className="star-5">★</i>
  // </div>
  // <i className="star-1" value="1">★</i>

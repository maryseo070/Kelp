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
      rating: "5",
      imageUrl: "",
      imageFile: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.imageUpload = this.imageUpload.bind(this);
    this.updateFile = this.updateFile.bind(this);
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
    const reefId = this.props.reef.id;
    const review = merge({}, this.state, {reef_id: reefId});
    this.props.createReview(review).then( () => this.props.history.push('/'));
  }

  updateField(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  updateRating(n) {
    this.setState({rating: n});
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

  imageUpload(e) {
    const file = this.state.imageFile;

    const formData = new FormData();
    formData.append("post[title]", title);
    // our backend can't handle a null image, so why even
    if (file) formData.append("post[image]", file);

    ApiUtil.createPhoto(formData, this.resetForm);
  }


  ratingStars(n = 4) {
      return (
        <div className={`rating rating-${n}`}>

          <div onClick={this.updateField("rating")} value="1" >
            <i className="star-1" value="1">★</i>
          </div>
        </div>
      );
    }

    // <i onClick={this.updateRating("rating")} value="2" onMouseEnter={this.colorChange} className="star-2">★</i>
    // <i onClick={this.updateRating("rating")} value="3" onMouseEnter={this.colorChange} className="star-3">★</i>
    // <i onClick={this.updateRating("rating")} value="4" onMouseEnter={this.colorChange} className="star-4">★</i>
    // <i onClick={this.updateRating("rating")} value="5" onMouseEnter={this.colorChange} className="star-5">★</i>

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
          <input type="date" value={this.state.date} onChange={this.updateField("date")}/>
          <input className="rev-text" type="textbox" value={this.state.body} onChange={this.updateField("body")}/>

          <input type="submit" value="Post Review"></input>
        </form>

        <form onSubmit={this.imageUpload}>
          <div>
            <input type="file" onChange={this.updateFile}></input>
          </div>

        </form>

      </div>
    );
  }
}

export default withRouter(ReviewForm);

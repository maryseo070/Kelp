import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import {merge} from 'lodash';
import LogInModal from '../session/login_modal';

class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: "",
      date: "",
      rating: "",
      imageUrl: null,
      imageFile: "",
      ratingStars: {
          1: "star-1",
          2: "star-2",
          3: "star-3",
          4: "star-4",
          5: "star-5"
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.ratingStars = this.ratingStars.bind(this);
    this.starChange = this.starChange.bind(this);
    this.resetStars = this.resetStars.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount () {
    this.props.fetchReef(this.props.match.params.reefId);
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
    review.append("review[author]", this.props.currentUser);
    this.props.createReview(review).then( () => this.props.history.push(`/reefs/${reefId}`));
  }

  updateField(field){
    return (e) => {
      this.setState({[field]: e.target.value, date: new Date()});
      // document.getElementById(e.target.id).selected = true;
      const selected = document.getElementsByClassName(e.target.className);
      for (let i = 0; i < selected.length; i++) {
        selected[i].selected = true;
      }
    };
  }

  updateFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ imageUrl: reader.result, imageFile: file});

    if (file) {
      reader.readAsDataURL(file);
    }
    // else {
    //   this.setState({ imageUrl: "", imageFile: null });
    // }
  }

  starChange(star) {
    let stars = this.state.ratingStars;
    let newRatingState = {};
    for (let i = 1; i <= Object.keys(stars).length; i++) {
      if (i <= star) {
        newRatingState[i] = `star-${star}-selected`;
      }
      else {
        newRatingState[i] = "no-star";
      }
    }
    this.setState({ratingStars: newRatingState});
  }

  resetStars() {
    if (!this.state.rating) {
      let star = this.state.rating;
      const stars = this.state.ratingStars;
      const ratingKeys = Object.keys(stars);
      const newRatingState = merge({}, stars);
      ratingKeys.forEach( (key)=> {
        if (key <= star) {
          newRatingState[key] = `star-${key}`;
        }
        else {
          newRatingState[key] = "star-6";
        }
      });
      this.setState({ratingStars: newRatingState});
    }

  }


  ratingStars() {
    return (
      <div className="rating-stars" onMouseLeave={() => this.resetStars()}>
        <option id="star-1" onMouseEnter={() => this.starChange(1)} onClick={this.updateField("rating")} className={this.state.ratingStars[1]} value="1" >★</option>
        <option id="star-2" onMouseEnter={() => this.starChange(2)} onClick={this.updateField("rating")} className={this.state.ratingStars[2]} value="2" >★</option>
        <option id="star-3" onMouseEnter={() => this.starChange(3)} onClick={this.updateField("rating")} className={this.state.ratingStars[3]} value="3" >★</option>
        <option id="star-4" onMouseEnter={() => this.starChange(4)} onClick={this.updateField("rating")} className={this.state.ratingStars[4]} value="4" >★</option>
        <option id="star-5" onMouseEnter={() => this.starChange(5)} onClick={this.updateField("rating")} className={this.state.ratingStars[5]} value="5" >★</option>
      </div>
    );
  }

  renderErrors() {
    if (this.props.errors) {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li className="rendered-errors" key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  render () {

    let reefName;
    let reefId;
    let buttons;

    if (this.props.reef) {
      reefName = this.props.reef.name;
      reefId = this.props.reef.id;
    }

    return (
      <div>
        <div className="rev-header-wrapper">
          <a href="#/reefs" className="rev-kelp-logo" >
            <img className="thanks-elliot"src={window.logo} />
          </a>
          <div className="rev-heading">Write a Review</div>

          <div className='rev-buttons'>
          {buttons}
          </div>
        </div>

        <div className="rev-form-body">
          <div className="rev-reef-title">
            <Link className="reef-name" to={`/reefs/${reefId}`}>{reefName}</Link>
          </div>

          <form className="rev-form" onSubmit={this.handleSubmit}>

            {this.ratingStars()}

            <textarea className="rev-text" value={this.state.body} onChange={this.updateField("body")} />
            <div>
              <input type="file" onChange={this.updateFile}></input>
            </div>

            <div>
              {this.renderErrors()}
            </div>

            <input className="rev-form-submit" type="submit" value="Post Review" onClick={() => this.modal}></input>

          </form>

        </div>

      </div>
    );
  }
}

export default withRouter(ReviewForm);

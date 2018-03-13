import React from 'react';
import {Link} from 'react-router-dom';
import ReefShowItem from './reef_show_item';

class ReefShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReef(this.props.match.params.reefId);
    // console.log(this.props);
  }
  // componentDidUpdate () {
  //   console.log(this.props)
  // }

  render () {
    // debugger
    let reefShowItem;
    let reviews;
    if (this.props.reef === undefined) {
      return(
        <div>Loading...</div>
      );
    }
    if (this.props.reef) {
      reviews = Object.values(this.props.reviews);
      reefShowItem = <ReefShowItem authors={this.props.authors} reefId={this.props.match.params.reefId} reef={this.props.reef} reviews={this.props.reviews} />;
    }
    else {
      reefShowItem = "";
    }

    return (
      <div className="header">
      <div className="top-top-header">

        <div className="show-header">

          <a href="/" className="kelp-logo" >
            <img className="thanks-elliot"src={window.logo} />
          </a>

            <form className="show-form">
              <input type="text" className="show-input" placeholder="Find Coral Reefs"></input>
              <input type="text" className="show-input" placeholder="Near..."></input>
              <input type="submit" value="search" className="show-submit"/>
            </form>
        </div>

      </div>
      <div className="top-nav">
        <ul className="show-link-holder">
          <li>
            <Link to="/reefs" className="show-links">Coral Reefs</Link>
          </li>
          <li></li>
        </ul>

      </div>

      {reefShowItem}

      </div>

    );
  }
}

export default ReefShow;

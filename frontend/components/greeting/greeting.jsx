import React from 'react';
import {Link} from 'react-router-dom';


class Greeting extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    console.log(this.props.currentUser)
  }

  render () {
    if (this.props.currentUser) {
      return (
        <div >
          <button className="logout-button" onClick={this.props.logout}>Log Out</button>
        </div>
      );
    }
    else {
      return (
        <div className="header-links-container">
          <Link className="header-links" to="/login">Log In</Link>
          <Link className="header-links" to="/signup">Sign Up</Link>
        </div>
      );
    }

  }
}
export default Greeting;

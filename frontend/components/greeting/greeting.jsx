import React from 'react';
import {Link} from 'react-router-dom';


class Greeting extends React.Component {

  render () {
    if (this.props.currentUser) {
      return (
        <div>
          <h1>Greetings {this.props.currentUser.username}!</h1>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      );
    }
    else {
      return(<div>
        <ul>
          <Link to='/signup'><li>Sign Up</li></Link>
          <Link to='/login'><li>Log In</li></Link>
        </ul>
      </div>
    );
  }
  }
}
export default Greeting;

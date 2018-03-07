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
      return(
      <div className="greeting-page">

        <div className='div-break'></div>

        <div className='home-header-nav'>
          <ul className="signup-login-links">
            <Link to='/login' className="greeting-links-1">Log In</Link>
            <Link to='/signup' className="greeting-links-2">Sign Up</Link>
          </ul>
        </div>

        <div className="home-hero">
          <h3 className="greeting-logo">Kelp</h3>
          <form className="greeting-form">
            <input type="text" className="greeting-input" placeholder="Find Coral Reefs"></input>
            <input type="text" className="greeting-input" placeholder="Near..."></input>
            <input type="submit" value="search" className="greeting-submit"/>
          </form>
        </div>

      </div>
    );
  }
  }
}
export default Greeting;

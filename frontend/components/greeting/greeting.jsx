import React from 'react';
import {Link} from 'react-router-dom';


class Greeting extends React.Component {

  render () {
    if (this.props.currentUser) {
      return (
        <div>
          <button className="logout-button" onClick={this.props.logout}>Log Out</button>
        </div>
      );
    }
    else {
      return (
        <div>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      );
    }
  //   else {
  //     return(
  //     <div className="greeting-page">
  //
  //       <div className='div-break'></div>
  //
  //       <div className='home-header-nav'>
  //         <ul className="signup-login-links">
  //           <Link to='/login' className="greeting-links-1">Log In</Link>
  //           <Link to='/signup' className="greeting-links-2">Sign Up</Link>
  //         </ul>
  //       </div>
  //
  //       <div className="home-hero">
  //         <a href="/" className="kelp-logo" >
  //           <img className="thanks-elliot-2"src={window.logo} />
  //         </a>
  //         <form className="greeting-form">
  //           <input type="text" className="greeting-input" placeholder="Find Coral Reefs"></input>
  //           <input type="text" className="greeting-input" placeholder="Near..."></input>
  //           <input type="submit" value="search" className="greeting-submit"/>
  //         </form>
  //       </div>
  //
  //     </div>
  //   );
  // }
  }
}
export default Greeting;

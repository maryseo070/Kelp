import React from 'react';
import ReefSearchContainer from '../search/reef_search_container';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions.js';
import {fetchReefs, fetchThreeReefs} from '../../actions/reef_actions.js'
import HomeBottom from './home_bottom.jsx';

const msp = state => {
  return {
    currentUser: state.session.currentUser,
    reefs: Object.values(state.entities.reefs)
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchReefs: () => dispatch(fetchReefs()),
    fetchThreeReefs: () => dispatch(fetchThreeReefs())
  };
};

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchThreeReefs();
  }

  renderButtons() {
    let buttons;
    if (this.props.currentUser === null) {
      return (
      <div>
        <Link to='/login' className="greeting-links-1">Log In</Link>
        <Link to='/signup' className="greeting-links-2">Sign Up</Link>
      </div> );
    }
    else {
      return (
      <div>
        <Link onClick={this.props.logout} to='/reefs' className="greeting-links-1">Log Out</Link>
      </div> );
    }

  }
  render () {
    return(
      <div className="home-page-all">
        <div className="greeting-page">

          <div className='div-break'></div>

          <div className='home-header-nav'>
            <ul className="signup-login-links">
              {this.renderButtons()}
            </ul>
          </div>

          <div className="home-hero">
            <a href="#/reefs" className="kelp-logo" >
              <img className="thanks-elliot-2"src={window.logo} />
            </a>
            <ReefSearchContainer />
          </div>

          <ul className="show-link-holder">
            <li>
              <Link to="/reefs" onClick={() => (this.props.fetchReefs())} className="show-links">Coral Reefs</Link>
            </li>
          </ul>
      </div>

        <HomeBottom reefs={this.props.reefs} />
      </div>


    );
  }
}

export default connect(msp, mdp)(HomePage);

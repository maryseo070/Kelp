import React from 'react';
import {Link} from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import ReefSearchContainer from '../search/reef_search_container';
import {connect} from 'react-redux';
import {fetchReefs} from '../../actions/reef_actions.js';

const mdp = dispatch => {
  return {
    fetchReefs: ()=> dispatch(fetchReefs())
  };
};



class IndexHeader extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return(
      <div className="header">
        <div className="top-top-header">

          <div className="show-header">

            <a href="#/reefs" onClick={() => (this.props.fetchReefs())} className="kelp-logo" >
              <img className="thanks-elliot"src={window.logo} />
              </a>

              <div className="greeting-buttons">

                <ReefSearchContainer />

                  <div>
                    <GreetingContainer />
                    </div>
                  </div>
                </div>

              </div>
              <div className="top-nav">
                <ul className="show-link-holder">
                  <li>
                    <Link to="/reefs" onClick={() => (this.props.fetchReefs())} className="show-links">Coral Reefs</Link>
                    </li>
                  </ul>
                </div>
              </div>
            );

  }
};

export default connect(null, mdp)(IndexHeader);

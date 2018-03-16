import React from 'react';
import {Link} from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import ReefSearchContainer from '../search/reef_search_container';

const IndexHeader = () => {
  return(
    <div className="header">
    <div className="top-top-header">

      <div className="show-header">

        <a href="#/reefs" className="kelp-logo" >
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
          <Link to="/reefs" className="show-links">Coral Reefs</Link>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default IndexHeader;

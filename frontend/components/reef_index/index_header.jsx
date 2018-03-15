import React from 'react';
import {Link} from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

const IndexHeader = () => {
  return(
    <div className="header">
    <div className="top-top-header">

      <div className="show-header">

        <a href="/" className="kelp-logo" >
          <img className="thanks-elliot"src={window.logo} />
        </a>

        <div className="greeting-buttons">
          <form className="show-form">
            <input type="text" className="show-input" placeholder="Find Coral Reefs"></input>
            <input type="text" className="show-input" placeholder="Near..."></input>
            <input type="submit" value="search" className="show-submit"/>
          </form>
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

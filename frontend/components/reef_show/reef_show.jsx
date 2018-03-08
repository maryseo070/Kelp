import React from 'react';
import {Link} from 'react-router-dom';

class ReefShow extends React.Component {
  render () {
    return (
      <div className="top-top-header">

        <div className="show-header">
          <a href="/" className="kelp-logo" >Kelp</a>

            <form className="greeting-form">
              <input type="text" className="show-input" placeholder="Find Coral Reefs"></input>
              <input type="text" className="show-input" placeholder="Near..."></input>
              <input type="submit" value="search" className="show-submit"/>
            </form>
        </div>


      </div>
    );
  }
}

export default ReefShow;

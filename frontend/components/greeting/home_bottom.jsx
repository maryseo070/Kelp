import React from 'react';
import {Link} from 'react-router-dom';

class HomeBottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render (){
    let reefs;
    let reefInfo;
    if (this.props.reefs) {
      reefs = this.props.reefs;
      reefInfo = reefs.map((reef) => {
        return (
          <ul>
            <li>{reef.name}</li>
            <li>{reef.avg_rating}</li>
            <li>{reef.continent}</li>
          </ul>
      );
    });
    }

    return(
      <div>
        <h3>Kelp Manhattan</h3>
        {reefInfo}
      </div>
    );
  }
}

export default HomeBottom;

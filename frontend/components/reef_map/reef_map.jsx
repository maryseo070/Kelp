import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

class ReefMap extends React.Component {


  render() {
    return (
      <div className="map" ref="map"id='map-container' >
        Map
      </div>
    );
  }
}

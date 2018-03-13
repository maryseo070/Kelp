import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager.js';

class ReefMap extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    const mapOptions = {
      center: { lat: 40.749138, lng: -73.986385 },
      zoom: 13
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.reefs !== this.props.reefs) {
      this.MarkerManager.updateMarkers();
    }
    else {
      return;
    }
  }

  render() {
    return(
      <div id='map-container' ref={ map => this.mapNode = map}></div>
    );
  }
}

export default ReefMap;

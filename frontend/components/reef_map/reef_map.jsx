import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager.js';

const mapOptions = {
  center: { lat: 40.749138, lng: -73.986385 },
  zoom: 0,
  mapTypeControlOptions: {
    mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.HYBRID]
  }, 
    disableDefaultUI: true, // a way to quickly hide all controls
    mapTypeControl: false,
    scaleControl: true,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE
    },
};

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});


class ReefMap extends React.Component {
  constructor(props){
    super(props);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
  }

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick);
    this.registerListeners();
    if (this.props.singleReef) {
      // const targetReefKey = Object.keys(this.props.reefs[0]);
      // const targetReef = this.props.reefs[targetReefKey];
      this.MarkerManager.updateMarkers(this.props.reef);
    } else {
      this.MarkerManager.updateMarkers(this.props.reefs);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.singleReef) {
      // const targetReefKey = Object.keys(this.props.reefs[0]);
      // const targetReef = this.props.reefs[targetReefKey];
      this.MarkerManager.updateMarkers(this.props.reef);
    } else {
      this.MarkerManager.updateMarkers(this.props.reefs);
    }
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const {north, south, east, west} = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west } };
      }
    );

  }


  handleMarkerClick(reef) {
    this.props.history.push(`/reefs/${reef.id}`);
  }


  render() {
    return(
      <div id='map-container' ref={ map => this.mapNode = map}></div>
    );
  }
}

export default withRouter(ReefMap);

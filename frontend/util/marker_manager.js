import React from 'react';

class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.createMarkerFromReef = this.createMarkerFromReef.bind(this);
  }

  updateMarkers(reefs) {
    const reefsObj = {};

  }

  createMarkerFromReef(reef) {
    const position = new google.maps.LatLng(reef.lat, reef.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      reefId: reef.id
    });




  }

}

export default MarkerManager;

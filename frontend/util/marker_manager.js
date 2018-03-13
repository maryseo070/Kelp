import React from 'react';

class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.createMarkerFromReef = this.createMarkerFromReef.bind(this);
  }

  updateMarkers(reefes) {
    // const reefsObj = {};
    //   reefs.forEach(reef => reefsObj[reef.id] = reef);
    //
    //   reefs
    //     .filter(reef => !this.markers[reef.id])
    //     .forEach(newReef => this.createMarkerFromReef(newReef, this.handleClick));
    //
    //   Object.keys(this.markers)
    //     .filter(reefId => !reefsObj[reefId])
    //     .forEach((reefId) => this.removeMarker(this.markers[reefId]));
  }

  createMarkerFromReef(reef) {
    const position = new google.maps.LatLng(reef.lat, reef.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      reefId: reef.id
    });

    marker.addListener('click', () => this.handleClick(reef));
    this.markers[marker.reefId] = marker;
  }

}

export default MarkerManager;

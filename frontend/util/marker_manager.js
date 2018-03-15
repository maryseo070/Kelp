import React from 'react';

class MarkerManager {
  constructor(map, handleMarkerClick) {
    this.map = map;
    this.markers = {};
    this.createMarkerFromReef = this.createMarkerFromReef.bind(this);
    this.handleMarkerClick = handleMarkerClick;
  }

  updateMarkers(reefs) {
    const reefsObj = {};
    console.log(reefs)
    reefs.forEach(reef => reefsObj[reef.id] = reef);
    
    reefs.filter(reef => !this.markers[reef.id]).forEach(newReef => this.createMarkerFromReef(newReef, this.handleMarkerClick));
    
    Object.keys(this.markers).filter(reefId => !reefsObj[reefId]).forEach((benchId) => this.removeMarker(this.markers[benchId]));
  }

  
  createMarkerFromReef(reef) {
    const position = new google.maps.LatLng(reef.lat, reef.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      reefId: reef.id
    });
    marker.addListener('click', () => this.handleMarkerClick(reef));
    this.markers[marker.reefId] = marker;
  }
  
  removeMarker (marker){
    this.markers[marker.reefId].setMap(null);
    delete this.markers[marker.reefId];
  }

}

export default MarkerManager;

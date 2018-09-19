import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

const GoogleMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={6} defaultCenter={{ lat: 52.0, lng: 20.0 }}>
      {props.isMarkerShown &&
        props.places.map(place => (
          <Marker position={{ lat: place.lat, lng: place.lng }} />
        ))}
    </GoogleMap>
  ))
);
export default GoogleMapComponent;

import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

const GoogleMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 50.049683, lng: 19.944544 }}>
      {props.isMarkerShown &&
        props.places.map(place => (
          <Marker position={{ lat: place.lat, lng: place.lng }} />
        ))}
    </GoogleMap>
  ))
);
export default GoogleMapComponent;

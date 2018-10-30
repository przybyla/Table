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
      defaultZoom={props.events ? 6 : 15}
      defaultCenter={{
        lat: props.events ? 52.0 : props.lat,
        lng: props.events ? 20.0 : props.lng
      }}>
      {props.events
        ? props.isMarkerShown &&
          props.events.map(place => (
            <Marker position={{ lat: place.lat, lng: place.lng }} />
          ))
        : props.isMarkerShown && (
            <Marker position={{ lat: props.lat, lng: props.lng }} />
          )}
    </GoogleMap>
  ))
);
export default GoogleMapComponent;

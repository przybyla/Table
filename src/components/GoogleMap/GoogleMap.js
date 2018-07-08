import React from 'react';
import styled from 'styled-components';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import icon from './1.png';

const exampleMapStyles = [
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [
      {
        hue: '#000000'
      },
      {
        saturation: -100
      },
      {
        lightness: -100
      },
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [
      {
        hue: '#000000'
      },
      {
        saturation: -100
      },
      {
        lightness: -100
      },
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'administrative',
    elementType: 'all',
    stylers: [
      {
        hue: '#000000'
      },
      {
        saturation: 0
      },
      {
        lightness: -100
      },
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels',
    stylers: [
      {
        hue: '#ffffff'
      },
      {
        saturation: -100
      },
      {
        lightness: 100
      },
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'labels',
    stylers: [
      {
        hue: '#000000'
      },
      {
        saturation: -100
      },
      {
        lightness: -100
      },
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'all',
    stylers: [
      {
        hue: '#ffffff'
      },
      {
        saturation: -100
      },
      {
        lightness: 100
      },
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        hue: '#ffffff'
      },
      {
        saturation: -100
      },
      {
        lightness: 100
      },
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'transit',
    elementType: 'labels',
    stylers: [
      {
        hue: '#000000'
      },
      {
        saturation: 0
      },
      {
        lightness: -100
      },
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'landscape',
    elementType: 'labels',
    stylers: [
      {
        hue: '#000000'
      },
      {
        saturation: -100
      },
      {
        lightness: -100
      },
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        hue: '#bbbbbb'
      },
      {
        saturation: -100
      },
      {
        lightness: 26
      },
      {
        visibility: 'on'
      }
    ]
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      {
        hue: '#dddddd'
      },
      {
        saturation: -100
      },
      {
        lightness: -3
      },
      {
        visibility: 'on'
      }
    ]
  }
];

const GoogleMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultOptions={{ styles: exampleMapStyles }}
      defaultZoom={13}
      defaultCenter={{ lat: 50.049683, lng: 19.944544 }}>
      {props.isMarkerShown &&
        props.places.map(place => (
          <Marker
            icon={{
              url: icon
            }}
            position={{ lat: place.lat, lng: place.lng }}
          />
        ))}
    </GoogleMap>
  ))
);
export default GoogleMapComponent;

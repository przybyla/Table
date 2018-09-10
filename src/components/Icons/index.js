// @flow
import React from 'react';

export const ListIcon = ({ color }: { color: string }) => (
  <svg
    aria-hidden="true"
    data-prefix="fas"
    data-icon="list"
    height="20px"
    class="svg-inline--fa fa-list fa-w-16"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512">
    <path
      fill={color}
      d="M128 116V76c0-8.837 7.163-16 16-16h352c8.837 0 16 7.163 16 16v40c0 8.837-7.163 16-16 16H144c-8.837 0-16-7.163-16-16zm16 176h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zM16 144h64c8.837 0 16-7.163 16-16V64c0-8.837-7.163-16-16-16H16C7.163 48 0 55.163 0 64v64c0 8.837 7.163 16 16 16zm0 160h64c8.837 0 16-7.163 16-16v-64c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v64c0 8.837 7.163 16 16 16zm0 160h64c8.837 0 16-7.163 16-16v-64c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v64c0 8.837 7.163 16 16 16z"
    />
  </svg>
);
export const UserIcon = ({ color }: { color: string }) => (
  <svg
    aria-hidden="true"
    data-prefix="fas"
    data-icon="user"
    height="20px"
    class="svg-inline--fa fa-user fa-w-14"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
    <path
      fill={color}
      d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
    />
  </svg>
);
export const MapIcon = ({ color }: { color: string }) => (
  <svg
    aria-hidden="true"
    data-prefix="fas"
    data-icon="map-marked"
    height="20px"
    class="svg-inline--fa fa-map-marked fa-w-18"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512">
    <path
      fill={color}
      d="M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z"
    />
  </svg>
);

export const AddEventIcon = ({ color }: { color: string }) => (
  <svg
    aria-hidden="true"
    data-prefix="fas"
    data-icon="plus"
    height="20px"
    class="svg-inline--fa fa-plus fa-w-14"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
    <path
      fill={color}
      d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
    />
  </svg>
);
export const PinIcon = ({ color }: { color: string }) => (
  <svg
    aria-hidden="true"
    data-prefix="fas"
    data-icon="map-pin"
    height="20px"
    class="svg-inline--fa fa-map-pin fa-w-10"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512">
    <path
      fill={color}
      d="M192 300.813v172.82l-22.015 33.023c-4.75 7.125-15.219 7.125-19.969 0L128 473.633v-172.82a162.221 162.221 0 0 0 64 0zM160 0c79.529 0 144 64.471 144 144s-64.471 144-144 144S16 223.529 16 144 80.471 0 160 0M80 136c0-39.701 32.299-72 72-72a8 8 0 0 0 0-16c-48.523 0-88 39.477-88 88a8 8 0 0 0 16 0z"
    />
  </svg>
);
export const CloseMenuIcon = ({ color }: { color: string }) => (
  <svg
    aria-hidden="true"
    data-prefix="fas"
    data-icon="times"
    height="20px"
    class="svg-inline--fa fa-times fa-w-11"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 352 512">
    <path
      fill={color}
      d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
    />
  </svg>
);
export const MenuIcon = ({ color }: { color: string }) => (
  <svg
    aria-hidden="true"
    data-prefix="fas"
    data-icon="bars"
    height="20px"
    class="svg-inline--fa fa-bars fa-w-14"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512">
    <path
      fill={color}
      d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
    />
  </svg>
);

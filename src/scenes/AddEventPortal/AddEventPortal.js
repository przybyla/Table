import React from 'react';
import ReactDOM from 'react-dom';
import AddEvent from '../AddEvent';

type PropsType = {
  renderRef: Element
};
const AddEventPortal = ({ renderRef }: PropsType) =>
  renderRef ? ReactDOM.createPortal(<AddEvent />, renderRef) : null;

export default AddEventPortal;

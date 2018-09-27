import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const EventItemWrapper = styled.div`
  padding: 5px;
  border-bottom: 1px solid #000;
  height: 100px;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: auto auto auto;
`;

const EventName = styled.div`
  font-size: 16px;
  grid-column: 1;
  grid-row: 1;
  align-self: center;
`;

const EventAdress = styled.div`
  font-size: 12px;
  grid-column: 1;
  grid-row: 3;
  align-self: center;
`;

const EventDetails = styled.div`
  font-size: 10px;
  grid-column: 2;
  grid-row: 3;
  align-self: center;
`;

type PropsType = {
  key: string,
  name: string,
  street: string,
  city: string,
  date: string,
  time: string
};

const EventItem = ({ key, name, street, city, date, time }: PropsType) => (
  <NavLink to={`/event/${name}`}>
    <EventItemWrapper key={key}>
      <EventName>{name}</EventName>
      <EventAdress>
        {street}, {city}
      </EventAdress>
      <EventDetails>
        <div>{date}</div>
        <div>{time}</div>
      </EventDetails>
    </EventItemWrapper>
  </NavLink>
);

export default EventItem;

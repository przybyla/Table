import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const EventItemWrapper = styled.div`
  padding: 5px;
  border-bottom: 1px solid #000;
  &:last-child {
    border-bottom: none;
  }
`;

const EventName = styled.div`
  font-size: 16px;
`;

const EventAdress = styled.div`
  font-size: 12px;
`;

const EventDetails = styled.div`
  font-size: 10px;
  display: flex;
  justify-content: space-between;
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
  <EventItemWrapper key={key}>
    <NavLink to={`/event/${name}`}>
      <EventName>{name}</EventName>
      <EventAdress>
        {street}, {city}
      </EventAdress>
      <EventDetails>
        <div>{date}</div>
        <div>{time}</div>
      </EventDetails>
    </NavLink>
  </EventItemWrapper>
);

export default EventItem;

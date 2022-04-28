import React from 'react';
import styled from 'styled-components';
import { formatAMPMHours } from '../HourPicker/HourPicker';

interface SelectedDatesProps {
  taggedSessions: any[];
  setTaggedSessions: Function;
}

const dayAbbreviations = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

const SelectedDates = (props: SelectedDatesProps) => {
  const { taggedSessions, setTaggedSessions } = props;
  const renderedSessions = taggedSessions.map((session) => {
    const { formattedHour, ampm } = formatAMPMHours(session.getHours());
    const handleCloseClick = () => {
      console.log('delete item');
      const filteredArray = taggedSessions.filter((item) => {
        return item.getTime() !== session.getTime();
      });

      console.log(filteredArray);

      setTaggedSessions(filteredArray);
    };
    console.log(formattedHour, ampm);
    return (
      <SessionListItem key={session.getTime()}>
        <CloseButton onClick={handleCloseClick}>&#10006;</CloseButton>{' '}
        {session.getMonth() + 1}/{session.getDate()} -{' '}
        {dayAbbreviations[session.getDay()]}, &nbsp; {formattedHour} {ampm}
      </SessionListItem>
    );
  });

  let renderedPrice = null;
  if (taggedSessions.length > 0) {
    let sessionWord = 'session';
    if (taggedSessions.length > 1) {
      sessionWord = 'sessions';
    }
    renderedPrice = (
      <div>
        {taggedSessions.length} {sessionWord} &times; $40{' '}
        <TotalContainer>total: ${taggedSessions.length * 40}</TotalContainer>
      </div>
    );
  }
  return (
    <div>
      <SessionsList>{renderedSessions}</SessionsList>
      <PriceContainer>{renderedPrice} </PriceContainer>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const CloseButton = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
  color: black;
  height: 45px;
  width: 45px;
`;

const TotalContainer = styled.h4``;

const SessionsList = styled.ul`
  display: flex;
  align-items: baseline;
  flex-direction: column;
  gap: 10px;
  padding-inline-start: 16px;
  flex: 1;
`;

const PriceContainer = styled.div`
  flex: 1;
`;

const SessionListItem = styled.li`
  list-style: none;
`;

export default SelectedDates;

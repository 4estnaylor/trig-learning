import React from 'react';
import styled from 'styled-components';
import colors from '../../colors/colors';
import { formatAMPMHours } from '../HourPicker/HourPicker';

interface SelectSessionProps {
  focusedOnDate: Date | null;
  focusedOnHour: number | null;
  taggedSessions: any[];
  setTaggedSessions: Function;
}
const monthAbbreviations = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const dayAbbreviations = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

const SelectSession = (props: SelectSessionProps) => {
  const { focusedOnDate, focusedOnHour, taggedSessions, setTaggedSessions } =
    props;
  console.log(focusedOnDate, focusedOnHour);
  let renderedContent = null;
  if (focusedOnDate && focusedOnHour) {
    const { formattedHour, ampm } = formatAMPMHours(focusedOnHour);

    const handleClick = () => {
      const sessionDate = new Date(
        focusedOnDate.getFullYear(),
        focusedOnDate.getMonth(),
        focusedOnDate.getDate(),
        focusedOnHour
      );
      const unsortedSessionDates = [...taggedSessions, sessionDate];
      const sortedSessions = unsortedSessionDates.sort(
        (a, b) => parseFloat(a.getTime()) - parseFloat(b.getTime())
      );
      setTaggedSessions(sortedSessions);
    };

    renderedContent = (
      <Wrapper>
        <SelectButton onClick={handleClick}> + </SelectButton> {}
        {dayNames[focusedOnDate.getDay()]}{' '}
        {monthAbbreviations[focusedOnDate.getMonth()]} {focusedOnDate.getDate()}
        , {formattedHour} {ampm}
      </Wrapper>
    );
  } else {
    renderedContent = <Wrapper></Wrapper>;
  }
  return <Wrapper> {renderedContent}</Wrapper>;
};

const Wrapper = styled.div`
  font-size: 1.25rem;
  min-height: 60px;
  display: flex;
  align-items: center;
  max-width: 500px;
  gap: 10px;
`;

const SelectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 45px;
  font-size: 2.2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: ${colors.blue};
  background-color: white;

  @media (hover: hover) and (pointer: fine) {
  }
`;

export default SelectSession;

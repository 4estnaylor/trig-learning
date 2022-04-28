import React, { useState } from 'react';
import styled from 'styled-components';
import DateButton from './DateButton/DateButton';
import exampleDate, { exampleDateUnavailable } from '../../data/exampleDate';
import colors from '../../colors/colors';
import TimePicker from './TimePicker/TimePicker';
import SelectedDatesDisplay from './SelectedDatesDisplay.tsx/SelectedDatesDisplay';

type FormatType = 'week' | 'month';

const formatType = 'week';

interface DatePickerProps {
  focusedCalendarDate: Date | null;
  setFocusedCalendarDate: Function;
}

const getLastSunday = (weekIndex = 0) => {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  d.setDate(d.getDate() + 7 * weekIndex);
  d.setDate(d.getDate() - d.getDay());
  return d;
};

const addDays = (date: Date = new Date(), numOfDays: number) => {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  d.setDate(d.getDate() + numOfDays);
  return d;
};

const getWeek = (weekIndex: number) => {
  let sunday = getLastSunday(weekIndex);
  let monday = addDays(sunday, 1);
  let tuesday = addDays(sunday, 2);
  let wednesday = addDays(sunday, 3);
  let thursday = addDays(sunday, 4);
  let friday = addDays(sunday, 5);
  let saturday = addDays(sunday, 6);

  const week = [sunday, monday, tuesday, wednesday, thursday, friday, saturday];
  return week;
};

const DatePicker = (props: DatePickerProps) => {
  const { focusedCalendarDate, setFocusedCalendarDate } = props;
  const max_weeks_in_future = 12;
  const [weekIndex, setWeekIndex] = useState(0);

  const lastSunday = getLastSunday(weekIndex);

  const handleNextWeekButtonClick = () => {
    if (weekIndex < max_weeks_in_future) {
      setWeekIndex(weekIndex + 1);
    }
  };

  const handlePrevWeekButtonClick = () => {
    if (weekIndex > 0) {
      setWeekIndex(weekIndex - 1);
    }
  };

  const week = getWeek(weekIndex);

  return (
    <Wrapper>
      <MonthTitle>
        {lastSunday.toLocaleString('en-us', {
          month: 'long',
        })}
        <TimeButtonsWrapper>
          <ChangeWeekButton onClick={handlePrevWeekButtonClick}>
            ❮
          </ChangeWeekButton>
          <ChangeWeekButton onClick={handleNextWeekButtonClick}>
            ❯
          </ChangeWeekButton>
        </TimeButtonsWrapper>
      </MonthTitle>
      <DayMarkers>
        <DayMarker>S</DayMarker>
        <DayMarker>M</DayMarker>
        <DayMarker>T</DayMarker>
        <DayMarker>W</DayMarker>
        <DayMarker>T</DayMarker>
        <DayMarker>F</DayMarker>
        <DayMarker>S</DayMarker>
      </DayMarkers>
      <DatesSection format={formatType}>
        {week.map((day) => {
          let isFocusedOn = false;

          if (
            focusedCalendarDate &&
            day.getDate() === focusedCalendarDate.getDate()
          ) {
            isFocusedOn = true;
          }

          return (
            <DateButton
              key={day.getDate()}
              date={day}
              setFocusedOnDay={setFocusedCalendarDate}
              isFocusedOn={isFocusedOn}
            ></DateButton>
          );
        })}
      </DatesSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 350px;
`;

const SelectSession = styled.div``;

const DatesSection = styled.div<{ format: FormatType }>`
  background-color: white;
  height: 100%;
  max-width: 500px;
  display: flex;
`;

const DayMarker = styled.div`
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 16px;
  padding-bottom: 16px;
  color: ${colors.mid_gray};
`;
const DayMarkers = styled.div`
  background-color: white;
  height: 100%;
  max-width: 500px;
  display: flex;
`;

const MonthTitle = styled.div`
  font-size: 1.25rem;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  max-width: 500px;
`;

const FocusedDayArea = styled.div``;
const FocusedDayTitle = styled.h3``;

const TimeButtonsWrapper = styled.div`
  display: flex;
`;

const ChangeWeekButton = styled.button`
  background-color: inherit;
  border: none;
  height: 45px;
  width: 60px;
  font-weight: 800;
  font-size: 1rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    background-color: ${colors.light_gray};
  }
`;
export default DatePicker;

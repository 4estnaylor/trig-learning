import React from 'react';
import styled, { css } from 'styled-components';
import colors from '../../colors/colors';
import { getAvailableHoursForDate } from '../../data/exampleDate';

export function formatAMPMHours(hours: number) {
  var hours = hours;
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  var strTime = hours + ' ' + ampm;
  return { formattedHour: hours, ampm: ampm };
}

interface HourPickerProps {
  focusedCalendarDate: Date | null;
  focusedHour: number | null;
  setFocusedHour: Function;
}

const HourPicker = (props: HourPickerProps) => {
  const { focusedCalendarDate, focusedHour, setFocusedHour } = props;
  let availableHours = null;
  if (focusedCalendarDate) {
    availableHours = getAvailableHoursForDate(focusedCalendarDate);
  }

  let renderedContent;
  if (!availableHours) {
    renderedContent = <AltMessage>select a date</AltMessage>;
  } else {
    renderedContent = (
      <HourTileContainer>
        {availableHours.map((hour) => {
          let isFocused = false;
          if (hour === focusedHour) {
            isFocused = true;
          }
          const { formattedHour, ampm } = formatAMPMHours(hour);
          return (
            <HourTile
              key={hour}
              onClick={() => {
                setFocusedHour(hour);
              }}
              isFocused={isFocused}
            >
              <HourDisplay>{formattedHour}</HourDisplay>
              <AMPMDisplay>{ampm}</AMPMDisplay>
            </HourTile>
          );
        })}
      </HourTileContainer>
    );
  }

  return (
    <div>
      <Wrapper>
        <TimeTitle>
          {' '}
          Time - {Intl.DateTimeFormat().resolvedOptions().timeZone}{' '}
        </TimeTitle>
        {renderedContent}
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div``;

const AltMessage = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  opacity: 0.5;
`;

const TimeTitle = styled.div`
  font-size: 1.25rem;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  max-width: 500px;
`;
const HourTileContainer = styled.div`
  display: flex;
`;

const isFocused = css`
  border: 2px solid ${colors.blue};
  font-weight: 800;
`;

const HourTile = styled.button<{ isFocused: boolean }>`
  width: 55px;
  height: 55px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${colors.blue_transparent};
    }
  }
  ${(p) => (p.isFocused ? isFocused : null)};
`;

const HourDisplay = styled.div`
  font-size: 1rem;
`;
const AMPMDisplay = styled.div`
  font-size: 0.85rem;
`;

export default HourPicker;

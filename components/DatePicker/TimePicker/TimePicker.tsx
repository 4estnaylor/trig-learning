import React from 'react';
import styled, { css } from 'styled-components';
import colors from '../../../colors/colors';

interface TimePickerProps {
  date: Date;
  setFocusedOnHour: Function;
  focusedOnHour: number;
}

const TimePicker = (props: TimePickerProps) => {
  const { date, setFocusedOnHour, focusedOnHour } = props;

  const hourInts = [11, 12, 13, 14, 15, 16, 17, 18, 19];
  const hours = hourInts.map((hour) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hour);
  });

  return (
    <Wrapper>
      <HoursWrapper>
        {hours.map((hour) => {
          const localeString = hour.toLocaleString('en-US', {
            hour: 'numeric',
            hour12: true,
          });
          let splitTimeString = localeString.split(' ');

          return (
            <HourTile
              key={hour.getHours()}
              onClick={setFocusedOnHour(hour.getHours())}
              focusedOnHour={focusedOnHour}
            >
              <HourDigits> {splitTimeString[0]}</HourDigits>
              <AMPM>{splitTimeString[1]}</AMPM>
            </HourTile>
          );
        })}
      </HoursWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 20px;
  border-top: 2px solid black;
`;

const HoursWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 4px;
`;

const HourDigits = styled.div``;

const AMPM = styled.div`
  font-size: 0.5rem;
`;

const isFocusedOn = css`
  border: 2px solid ${colors.blue};
`;

const HourTile = styled.button<{ focusedOnHour: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 44px;
  min-width: 44px;
  flex: 1;
  max-width: ${100 / 7}%;
  aspect-ratio: 1 / 1;
  background-color: white;
  border-radius: 50%;
  border: none;
  ${(p) => (p.focusedOnHour === 12 ? isFocusedOn : null)}
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${colors.blue_transparent};
    }
  }
`;
export default TimePicker;

import React from 'react';
import styled, { css } from 'styled-components';
import { dateSchedule } from '../../../data/exampleDate';
import colors from '../../../colors/colors';

interface DateButtonProps {
  date: Date;
  isFocusedOn: boolean;
  setFocusedOnDay: Function;
}
const checkAvailability = (date: Date) => {
  const now = new Date();
  const midnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() - 1,
    0
  );
  if (date.getTime() > midnight.getTime()) {
    return true;
  } else {
    return false;
  }
};

const DateButton = (props: DateButtonProps) => {
  const { date, isFocusedOn, setFocusedOnDay } = props;

  const handleClick = () => {
    setFocusedOnDay(date);
  };

  const availability = checkAvailability(date);
  // availability tests

  return (
    <Wrapper
      availability={availability}
      isFocusedOn={isFocusedOn}
      onClick={handleClick}
    >
      {date.getDate()}
    </Wrapper>
  );
};

const available = css`
  text-decoration: none;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${colors.blue_transparent};
    }
  }
`;

const notAvailable = css`
  text-decoration: line-through;
  opacity: 0.5;
`;

const focusedOn = css`
  border: 2px solid ${colors.blue};
  box-sizing: border-box;
  font-weight: bolder;
`;

const Wrapper = styled.button<{ availability: boolean; isFocusedOn: boolean }>`
  width: 45px;
  height: 45px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
  border: 2px solid white;
  ${(p) => (p.availability ? available : notAvailable)}
  ${(p) => (p.isFocusedOn ? focusedOn : null)}
`;

export default DateButton;

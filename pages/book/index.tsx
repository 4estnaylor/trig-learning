import React, { useState, useEffect } from 'react';
import Nav from '../../components/Nav/Nav';
import styled from 'styled-components';
import DatePicker from '../../components/DatePicker/DatePicker';
import HourPicker from '../../components/HourPicker/HourPicker';
import SelectSession from '../../components/SelectSession/SelectSession';
import SelectedDates from '../../components/SelectedDates/SelectedDates';
import PaymentButton from '../../components/PaymentButton/PaymentButton';

const Book = () => {
  const [focusedCalendarDate, setFocusedCalendarDate] = useState<null | Date>(
    null
  );
  const [focusedHour, setFocusedHour] = useState(null);
  const [taggedSessions, setTaggedSessions] = useState<any[]>([]);

  useEffect(() => {
    setFocusedHour(null);
  }, [focusedCalendarDate]);

  return (
    <div>
      <Nav />
      <BookingWrapper>
        {/* <Pricing>
          <h5>Pricing - $40 per 1 hour session</h5>
        </Pricing> */}
        <DatePicker
          focusedCalendarDate={focusedCalendarDate}
          setFocusedCalendarDate={setFocusedCalendarDate}
        />
        <HourPicker
          focusedCalendarDate={focusedCalendarDate}
          focusedHour={focusedHour}
          setFocusedHour={setFocusedHour}
        />
        <SelectSession
          focusedOnDate={focusedCalendarDate}
          focusedOnHour={focusedHour}
          taggedSessions={taggedSessions}
          setTaggedSessions={setTaggedSessions}
        />
        <SelectedDates
          taggedSessions={taggedSessions}
          setTaggedSessions={setTaggedSessions}
        />
        <PaymentButton taggedSessions={taggedSessions} />
      </BookingWrapper>
    </div>
  );
};

const BookingWrapper = styled.div`
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Pricing = styled.div`
  margin: auto;
  font-size: 1.25rem;
  padding-left: 16px;
  padding-right: 16px;
  line-height: 2rem;
  border-bottom: 2px solid black;
`;

export default Book;

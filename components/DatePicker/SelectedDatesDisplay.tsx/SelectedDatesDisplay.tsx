import React from 'react';
import styled from 'styled-components';

const MonthAbbreviations = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function formatAMPM(date: Date) {
  var month = MonthAbbreviations[date.getMonth()];
  var day = date.getDate();
  var hours = date.getHours();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  var strTime = month + ' ' + day + ', ' + hours + ':00 ' + ampm;
  return strTime;
}

const fakeBookedSessions = [
  new Date(2022, 1, 15, 12),
  new Date(2022, 3, 15, 12),
  new Date(2022, 5, 15, 3),
  new Date(2022, 7, 15, 12),
  new Date(2022, 8, 15, 4),
];

const SelectedDatesDisplay = () => {
  return (
    <Wrapper>
      <Receipt>
        {fakeBookedSessions.map((session) => (
          <ReceiptItem key={session.getTime()}>
            <button> x </button>
            {formatAMPM(session)}
          </ReceiptItem>
        ))}
      </Receipt>
      <BookButtonContainer>
        <BookButton> book </BookButton>
      </BookButtonContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Receipt = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ReceiptItem = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`;

const BookButtonContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BookButton = styled.button``;

export default SelectedDatesDisplay;

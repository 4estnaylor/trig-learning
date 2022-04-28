import React from 'react';
import styled from 'styled-components';
import colors from '../../colors/colors';

interface PaymentButtonProps {
  taggedSessions: any[];
}

const PaymentButton = (props: PaymentButtonProps) => {
  const { taggedSessions } = props;

  if (taggedSessions.length === 0) {
    return null;
  }
  return (
    <Wrapper>
      <Button>Pay</Button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  padding-bottom: 40px;
`;
const Button = styled.button`
  background-color: ${colors.blue};
  color: white;
  border: none;
  height: 60px;
  border-radius: 4px;
  width: 100px;
`;
export default PaymentButton;

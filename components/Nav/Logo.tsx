import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <Wrapper>Trig Tutor</Wrapper>
    </Link>
  );
};

const Wrapper = styled.h1`
  margin-right: 32px;
  &:hover {
    cursor: pointer;
  }
`;

export default Logo;

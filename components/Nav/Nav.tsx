import React from 'react';
import styled from 'styled-components';
import colors from '../../colors/colors';
import Logo from './Logo';
import Link from 'next/link';

const Nav = () => {
  return (
    <Wrapper>
      <Logo />
      <LinkSection>
        <MyLink href="/about_me">about me</MyLink>
        <MyLink href="/tutoring">tutoring</MyLink>
        <MyLink href="/book">book a session</MyLink>
      </LinkSection>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 16px;
  align-items: baseline;
  padding-bottom: 16px;
  border-bottom: 2px solid black;
  width: 100%;
`;

const LinkSection = styled.nav`
  display: flex;
  min-width: 300px;
  max-width: 500px;
  gap: 32px;
`;
const MyLink = styled(Link)``;

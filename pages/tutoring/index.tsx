import React from 'react';
import Nav from '../../components/Nav/Nav';
import styled from 'styled-components';

const tutoring = () => {
  return (
    <div>
      <Nav />
      <TutoringText>
        I provide 1-on-1 tutoring online using Zoom, a drawing tablet and a
        digital painting software called Krita that acts as a nifty whiteboard.
        <br /> <br /> For tutoring sessions students will need:
        <MaterialsList>
          <li>a computer with microphone</li>
          <li>something to write with</li>
        </MaterialsList>
        Some other, totally optional things that may be useful:
        <MaterialsList>
          <li>mini white-board</li>
          <li>drawing tablet </li>
          <li> digital painting software</li>
        </MaterialsList>
      </TutoringText>
    </div>
  );
};

const TutoringText = styled.div`
  max-width: 800px;
  padding-top: 32px;
  margin: auto;
  font-size: 1.25rem;
  padding-left: 16px;
  padding-right: 8px;
  line-height: 2rem;
`;

const MaterialsList = styled.ul``;

export default tutoring;

import React from 'react';
import Nav from '../../components/Nav/Nav';
import styled from 'styled-components';

const about_me = () => {
  return (
    <div>
      <Nav />
      <AboutMeText>
          For more than 7 years I have taught math, physics, and programming
        courses. Over the years, I have worked with hundreds of students in
        grades 6 - 12. For me and many others, math is best learned with lots of
        visuals, practice, questions, and pauses for thought . So, I try to
        incorporate a lot of that stuff into my teaching.
        <br />
        The math courses I have taught include:
        <CourseList>
          <li>pre-algebra</li>
          <li>algebra 1</li>
          <li>algebra 2</li>
          <li>geometry</li>
          <li>trigonometry &amp; precalculus</li>
          <li>probability &amp; statistics</li>
        </CourseList>
        Non-math courses include:
        <CourseList>
          <li>introduction to programming</li>
          <li>introduction to JavaScript</li>
          <li>animation with JavaScript</li>
          <li>physics</li>
          <li>english language</li>
        </CourseList>
        &emsp; I hold a bachelor’s degree in physics with minors in mathematics
        and rhetoric from Bates College. My thesis was a theoretical approach to
        understand advances in artificial leaf technology 🍃 .
      </AboutMeText>
    </div>
  );
};

const AboutMeText = styled.div`
  max-width: 800px;
  padding-top: 32px;
  margin: auto;
  font-size: 1.25rem;
  padding-left: 16px;
  padding-right: 8px;
  line-height: 2rem;
`;

const CourseList = styled.ul``;

export default about_me;

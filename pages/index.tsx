import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav/Nav';

const Home = () => {
  return (
    <div>
      <Nav />
      <SiteMission>
        &emsp; I help students demystify trigonometry and pre-calculus. These
        subjects can be mastered by all highschool students, and the unique
        challenges they present are speed bumps, not barriers.
        <br />
        <br />
        Having taught math classes to students in grades 6-12 in alignment with
        both IB and Common Core standards, trigonometry and pre-calculus stand
        out to me as the thorniest, most generally misunderstood subjects by
        students. There are a lot of good reasons students and teachers struggle
        with these two subjects in the classroom. Learning trigonometry and
        pre-calculus can be jarring and confusing because it poses challenges
        often very unlike what students have experienced previously in geometry
        and algebra.
        <br /> <br />
        The rapid pile-on of a large number of math skills and ideas both new
        and old in many trigonometry classes can make the learning curve look
        vertically asymtotic! This often leaves students with a murky,
        mysterious, and dissatisfying view of the subject as a whole.
        <br /> <br />A few core ideas, skills, and best practices can carve this
        mysterious murk into something that is actually pretty clear and
        intuitive. I help students reach a point where they can not only survive
        these subjects, but master them, creating a solid foundation for
        calculus and beyond.
      </SiteMission>
    </div>
  );
};

const SiteMission = styled.div`
  max-width: 800px;
  padding-top: 32px;
  margin: auto;
  font-size: 1.25rem;
  padding-left: 16px;
  padding-right: 8px;
  line-height: 2rem;
`;

const SubjectList = styled.ul``;

export default Home;

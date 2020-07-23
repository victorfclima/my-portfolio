import React from 'react';
import Nav from '../../Components/Nav/Nav';
import Header from '../../Components/Header/Header';

import { Title, Container } from '../../styles/global';
import './media.css';

function About() {
  return (
    <>
      <Nav />
      <Header />
      <Container>
        <Title>
          <span>ABOUT</span>
        </Title>
      </Container>
    </>
  );
}

export default About;

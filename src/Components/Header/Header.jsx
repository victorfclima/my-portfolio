import React from 'react';
import { Container, Title } from './styles.js';

import './media.css';

function Header() {
  return (
    <Container>
      <Title>
        <span>&lt;</span>
        VICTOR FRANÇA
        <span>/</span>
        <span>&gt;</span>
      </Title>
      <p>Front-End Developer</p>
    </Container>
  );
}

export default Header;

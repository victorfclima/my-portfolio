import React from 'react';
import Nav from '../../Components/Nav/Nav';
import Header from '../../Components/Header/Header';

import { Title, Container } from '../../styles/global';
import './media.css';

function Blog() {
  return (
    <>
      <Nav />
      <Header />
      <Container>
        <Title>
          <span>BLOG</span>
        </Title>
      </Container>
    </>
  );
}

export default Blog;

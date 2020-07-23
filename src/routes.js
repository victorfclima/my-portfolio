import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Portfolio from './pages/Portfolio/Portfolio';
import Challenges from './pages/Challenges/Challenges';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import { GlobalStyle } from './styles/global'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Portfolio} path="/" exact />
      <Route component={Challenges} path="/challenges" />
      <Route component={Blog} path="/blog" />
      <Route component={About} path="/about" />
      <GlobalStyle></GlobalStyle>
    </BrowserRouter>
  );
};

export default Routes;

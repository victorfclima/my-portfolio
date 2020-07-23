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
      <GlobalStyle />
      <Route component={Portfolio} path="/my-portfolio" exact />
      <Route component={Challenges} path="/my-portfolio/challenges" />
      <Route component={Blog} path="/my-portfolio/blog" />
      <Route component={About} path="/my-portfolio/about" />
    </BrowserRouter>
  );
};

export default Routes;

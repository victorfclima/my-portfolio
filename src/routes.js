import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Portfolio from './pages/Portfolio/Portfolio';
import Challenges from './pages/Challenges/Challenges';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';

const Routes = () => {
	return (
		<BrowserRouter>
			<Route component={Portfolio} path="/" exact />
			<Route component={Challenges} path="/challenges" />
			<Route component={Blog} path="/blog" />
			<Route component={About} path="/about" />
		</BrowserRouter>
	);
};

export default Routes;

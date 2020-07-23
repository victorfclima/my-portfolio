import React from 'react';
import Nav from '../../Components/Nav/Nav';
import Header from '../../Components/Header/Header';
import './styles.css';
import './media.css';

function Challenges() {
	return (
		<div className="challenges-page">
			<Nav />
			<Header />
			<div className="main-page">
				<h1 className="decorated">
					<span>CHALLENGES</span>
				</h1>
				<div className="items-grid">
					<ul>
						<li>
							<img src="" alt="Weather App" />
							<p>
								Weather App
								<br />
								Desafio proposto pela 1STi, para desenvolver um aplicativo de
								previsão do tempo.
							</p>
							<a
								href="https://victorfranca-weather.netlify.app/"
								target="_blank"
								rel="noopener noreferrer"
							>
								View full project &gt;&gt;
							</a>
							<a
								href="https://github.com/victorfclima/front-end-challenge-1STi-Weather"
								target="_blank"
								rel="noopener noreferrer"
							>
								View Code &gt;&gt;
							</a>
						</li>
						<li>
							<img src="" alt="Shop Filter App" />
							<p>
								Shop Promotion Filter App
								<br />
								Desafio proposto pela Addison Global, para desenvolver um
								aplicativo capaz de filtrar promoções com base em alguns
								requisitos.
							</p>
							<a
								href="https://victor-franca-shop.netlify.app/"
								target="_blank"
								rel="noopener noreferrer"
							>
								View full project >>
							</a>
							<a
								href="https://github.com/victorfclima/front-end-challenge-addisonGlobal"
								target="_blank"
								rel="noopener noreferrer"
							>
								View Code >>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Challenges;

import React from 'react';
import Nav from '../../Components/Nav/Nav';
import Header from '../../Components/Header/Header';
import './styles.css';
import './media.css';

import Potiguar from '../../assets/projphoto1.png';
import Solenergy from '../../assets/solenergy.png';
import Ecoleta from '../../assets/ecoleta.png';

function Portfolio() {
	return (
		<div className="portfolio-page">
			<Nav />
			<Header />
			<div className="main-page">
				<h1 className="decorated">
					<span>PORTFOLIO</span>
				</h1>
				<div className="items-grid">
					<ul>
						<li>
							<img src={Potiguar} alt="Potiguar Prime" />
							<p>
								Potiguar Prime
								<br />
								Criação e distribuição de camarões
							</p>
							<a
								href="https://potiguarprime.com.br"
								target="_blank"
								rel="noopener noreferrer"
							>
								View full project &gt;&gt;
							</a>
						</li>
						<li>
							<img src={Solenergy} alt="SolEnergy Engenharia" />
							<p>
								Sol Energy
								<br />
								Geração de energia solar
							</p>
							<a
								href="https://solenergyengenharia.com.br"
								target="_blank"
								rel="noopener noreferrer"
							>
								View full project &gt;&gt;
							</a>
						</li>
						<li>
							<img src={Ecoleta} alt="Ecoleta" />
							<p>
								Ecoleta
								<br />
								Marketplace para coleta de resíduos
							</p>
							<a href="https://github.com/victorfclima/ecoleta-eco-friendly-marketplace" target="_blank" rel="noopener noreferrer">
								View full project &gt;&gt;
							</a>
						</li>
						<li>
							<img src={Potiguar} alt="Potiguar Prime" />
							<p>
								My Portfolio
								<br />
								Portfolio pessoal
							</p>
							<a href="/" target="_blank" rel="noopener noreferrer">
								View full project &gt;&gt;
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;

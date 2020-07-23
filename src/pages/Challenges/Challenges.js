import React from 'react';
import Nav from '../../Components/Nav/Nav';
import Header from '../../Components/Header/Header';

import Weather from '../../assets/weatherapp.png'
import Shop from '../../assets/shopapp.png'

import Card from '../../Components/Card/Card';
import { Title, Container, Grid } from '../../styles/global';
import './media.css';

function Challenges() {
  return (
    <>
      <Nav />
      <Header />
      <Container>
        <Title>
          <span>CHALLENGES</span>
        </Title>
        <Grid>
          <ul>
            <li>
              <Card>
                <img src={Weather} alt="Weather App" />
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
              </Card>
            </li>

            <li>
              <Card>
                <img src={Shop} alt="Shop Filter App" />
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
                  View full project &gt;&gt;
							</a>
                <a
                  href="https://github.com/victorfclima/front-end-challenge-addisonGlobal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code &gt;&gt;
							</a>
              </Card>
            </li>
          </ul>
        </Grid>
      </Container>
    </>
  );
}

export default Challenges;

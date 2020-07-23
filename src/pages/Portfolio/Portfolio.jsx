import React from 'react';

import Nav from '../../Components/Nav/Nav';
import Header from '../../Components/Header/Header';

import Card from '../../Components/Card/Card';
import { Title, Container, Grid } from '../../styles/global';
import './media.css';

import Potiguar from '../../assets/projphoto1.png';
import Solenergy from '../../assets/solenergy.png';
import Ecoleta from '../../assets/ecoleta.png';

function Portfolio() {
  return (
    <>
      <Nav />
      <Header />
      <Container>
        <Title>
          <span>PORTFOLIO</span>
        </Title>
        <Grid>
          <ul>
            <li>
              <Card>
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
              </Card>
            </li>
            <li>
              <Card>
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
              </Card>
            </li>
            <li>
              <Card>
                <img src={Ecoleta} alt="Ecoleta" />
                <p>
                  Ecoleta
                  <br />
                  Marketplace para coleta de resíduos
                </p>
                <a
                  href="https://github.com/victorfclima/ecoleta-eco-friendly-marketplace"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View full project &gt;&gt;
                </a>
              </Card>
            </li>
            <li>
              <Card>
                <img src={Potiguar} alt="Potiguar Prime" />
                <p>
                  My Portfolio
                  <br />
                  Portfolio pessoal
                </p>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  View full project &gt;&gt;
                </a>
              </Card>
            </li>
          </ul>
        </Grid>
      </Container>
    </>
  );
}

export default Portfolio;

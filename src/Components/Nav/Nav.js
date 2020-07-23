import React from 'react';
import { Link } from 'react-router-dom';
import menu from '../../assets/menu.svg';
import './styles.css';
import './media.css';

function Nav() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg">
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbar"
        >
          <img src={menu} alt="Menu" />
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/my-portfolio" className="nav-link">
                PORTFOLIO
							</Link>
            </li>
            <li className="nav-item">
              <Link to="/my-portfolio/challenges" className="nav-link">
                CHALLENGES
							</Link>
            </li>
            <li className="nav-item">
              <Link to="/my-portfolio/blog" className="nav-link">
                BLOG
							</Link>
            </li>
            <li className="nav-item">
              <Link to="/my-portfolio/about" className="nav-link">
                ABOUT
							</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;

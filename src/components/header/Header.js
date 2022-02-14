import React from 'react';

import troll from '../../assets/troll-face.png';
import './Header.css';

export default function Header() {
  return (
      <header className="header-container">
        <img className="header-logo" src={troll} alt="troll"/>
        <h2 className="header-title">Meme generator</h2>
      </header>
  )
}

import React from 'react';

import './Meme.css';

export default function Meme() {
  return (
      <div className="form-container">
        <form className="form">
          <input type="text" className="input-field" placeholder="placeholder text"/>
          <input type="text" className="input-field" placeholder="placeholder text"/>
          <button type="submit" className="submit-button">Get a new meme image 🖼</button>
        </form>
      </div>
  )
}

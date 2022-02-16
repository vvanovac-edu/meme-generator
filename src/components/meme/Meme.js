import React, { useEffect, useState } from 'react';

import './Meme.css';

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: '',
  })

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
        .then((response) => response.json())
        .then((data) => setAllMemes(data?.data?.memes))
  }, [])

  const [allMemes, setAllMemes] = useState([])

  const getMemeImage = () => {
    const random = Math.floor(Math.random() * allMemes.length)

    const url = allMemes[random].url

    setMeme((prevMeme) => ({
        ...prevMeme,
        randomImage: url,
      }))
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }))
  }

  return (
      <div className="meme-container">
        <div className="form">
          <input
              className="input-field"
              type="text"
              placeholder="Top text"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
          />
          <input
              className="input-field"
              type="text"
              placeholder="Bottom text"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
          />
          <button
              className="submit-button"
              type="button"
              onClick={getMemeImage}
          >
            Get a new meme image 🖼
          </button>
        </div>
        {meme.randomImage.length > 0 &&
            <div className="meme">
              <img src={meme.randomImage} alt="meme" className="meme-image"/>
              <h2 className="meme-text top">{meme.topText}</h2>
              <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        }
      </div>
  )
}

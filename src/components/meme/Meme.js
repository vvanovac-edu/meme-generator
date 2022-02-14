import React, { useState } from 'react';

import './Meme.css';
import { memesData } from '../../data/memesData';

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: '',
  })

  const [allMemeImages, setAllMemeImages] = useState(memesData)

  const getMemeImage = () => {
    const memesArray = allMemeImages.data.memes

    const random = Math.floor(Math.random() * memesArray.length)

    const url = memesArray[random].url

    setMeme((prevMeme) => ({
        ...prevMeme,
        randomImage: url,
      }))
  }

  return (
      <div className="meme-container">
        <div className="form">
          <input
              className="input-field"
              type="text"
              placeholder="Top text"
          />
          <input
              className="input-field"
              type="text"
              placeholder="Bottom text"
          />
          <button
              className="submit-button"
              type="button"
              onClick={getMemeImage}
          >
            Get a new meme image 🖼
          </button>
        </div>
        { meme.randomImage.length > 0 &&
          <img src={meme.randomImage} alt="meme" className="meme-image"/>
        }
      </div>
  )
}

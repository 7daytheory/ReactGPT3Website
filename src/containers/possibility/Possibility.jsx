import React from 'react'
import './possibility.css'

import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className="gpt__possibility section__padding" id="possibility">
        <div className="gpt__possibility-image">
            <img src={possibilityImage} alt="Possibilities AI" />  
        </div>
    </div>
  )
}

export default Possibility
import React from 'react'
import './gpt3.css'
import { Feature } from '../../components'

const GPT3 = () => {
  return (
    <div className="gpt__whatgpt3 section__margin" id="gpt3">
      <div className="gpt__whatgpt3-feature">
          <Feature />
      </div>

      <div className="gpt__whatgpt3-header">
        <h1 className="gradient-text">The possbilities are beyond your imagination.</h1>
        <p>Explore the library</p>
      </div>

      <div className="gpt__whatgpt3-container">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  )
}

export default GPT3
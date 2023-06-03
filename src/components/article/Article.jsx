import React from 'react'
import './article.css';

const Article = ({imgUrl, date, title}) => {
  return (
    <div className="gpt__blog-container_article">
        <div className="gpt__blog-container_article-image">
            <img src={imgUrl} alt="Blog Graphic" />
        </div>
          <div className="gpt__blog-container_article-title">
              <div className="gpt__blog-container_article-content">
                <p>{date}</p>
                <h3>{title}</h3>
              </div>
              <p>Read More...</p>
          </div>
    </div>
  )
}

export default Article
import React from 'react'
import './article.css';

const Article = ({imgUrl, date, title}) => {
  return (
    <div className="gpt__blog-container_article">
        <div className="gpt__blog-container_article-img">
            <img src={imgUrl} alt="Blog Graphic" />
        </div>
          <div className="gpt__blog-container_article-title">
              <div>
                <p>{date}</p>
                <p>{title}</p>
              </div>
              <p>Read More...</p>
          </div>
    </div>
  )
}

export default Article
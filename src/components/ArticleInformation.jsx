import React from 'react'

export const ArticleInformation = ({ article }) => {
  return (
    <div className='article-list'>
      {
        article.map(article => (
          <div className='article-container'>
            <div className='img-container'>
              <img src={article.image} alt={article.title} />
            </div>
            <div className='article-body'>
              <h2> {article.title} </h2>
              <p> {article.description} </p>
              <div className='article-footer'>
                <span> {article.date} |  ---  |</span>
                <span> {article.ReadingTime} </span>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

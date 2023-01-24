import React from 'react'
import './News.css';

const News = () => {
  return (
    <div id='news'>
        <div >
            <h1 className='news-title'>news</h1>
        </div>
        <article className='article-style'>
          <h1>Heading Example</h1>
          <p>Insert article here</p>
        </article>
    </div>
  )
}

export default News
import React from 'react'
import Button from "./Button"

const Main = () => {
  return (
    <>
      <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
          <h1 className='text-light'>Stock Prediction Portal</h1>
          <p className='text-light lead'>Stock prediction involves analyzing historical market data, company fundamentals, economic indicators, and investor sentiment to estimate future price movements. Traditional methods rely on statistical models and technical indicators, while modern approaches increasingly use machine learning and artificial intelligence. These systems process large volumes of information, including financial reports, news articles, and social media trends, to identify patterns that may influence stock prices. Despite advances in predictive techniques, markets remain highly uncertain and affected by unexpected events.</p>
          <Button text="Login" class="btn-outline-info"/>
        </div>
      </div>

    </>
  )
}

export default Main
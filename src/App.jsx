import React from 'react'
import './App.css'
import data from './data'
import user from './assets/images/girl.jpg'
function App() {
  const handleClick = () => {
    console.log('Button Clicked') 

  
  }
  return (
    <>
    <div className="title">
      <h1>Shopping Cart</h1>
    </div>
    <div className="cards">
    {data.map(({ id, image,name,price,description}) => {
          return (
            <article className="portfolio__item" key={id}>

              <div className="portfolio__item-image">
                <img src={user}  />
              </div>

              <h3>{name}</h3>
              <h4>{description}</h4>
              <h3>{price}</h3>
              <div className="btn-section">
              <button onClick={handleClick}>-</button>
              <input type="button" value="0" />
              <button onClick={handleClick}>+</button>
              <button className='cartbtn'>Add To Cart</button>
              </div>
             
            </article>
          );
        })}
    </div>
    </>
    

  )
}

export default App
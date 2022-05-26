import React from 'react'
import Header from './Header'
import Product from './Product';
import './Home.css';

function Home() {
  return (
    <div>
    <Header/>
    <div className='home'>
    <img className='home__image' src="https://m.media-amazon.com/images/I/61yuQvDrMdL._SX3000_.jpg" alt="" />

    {/* 1st row products */}

    <div className="home__row">

    <Product
      id="11133231"
      title="The Lean Startup"
      price={11.43}
      rating={4}
      image="https://m.media-amazon.com/images/I/71ey-9D8yDL._SX679_.jpg"
    />

    <Product
      id="11133232"
      title="The Lean Startup"
      price={11.43}
      rating={4}
      image="https://m.media-amazon.com/images/I/71ey-9D8yDL._SX679_.jpg"
    />

    </div>

    {/* 2nd row products */}

    <div className="home__row">

    <Product
      id="11133233"
      title="The Lean Startup"
      price={11.43}
      rating={4}
      image="https://m.media-amazon.com/images/I/71ey-9D8yDL._SX679_.jpg"
    />

    <Product
      id="11133234"
      title="The Lean Startup"
      price={11.43}
      rating={4}
      image="https://m.media-amazon.com/images/I/71ey-9D8yDL._SX679_.jpg"
    />

    <Product
      id="11133235"
      title="The Lean Startup"
      price={11.43}
      rating={4}
      image="https://m.media-amazon.com/images/I/71ey-9D8yDL._SX679_.jpg"
    />

    </div>

    {/* 3rd row products */}

    <div className='home__row'>
    <Product
      id="11133236"
      title="The Lean Startup"
      price={11.43}
      rating={4}
      image="https://m.media-amazon.com/images/I/71ey-9D8yDL._SX679_.jpg"
    />
    </div>

    </div>
    </div>
  )
}

export default Home
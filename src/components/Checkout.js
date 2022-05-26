import React from 'react'
import Header from './Header'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
  const [{basket}] = useStateValue();

  return (
    <div>
      <Header/>
      <div className='checkout'>
      <div className="checkout__left"> 
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/May22/Rs1Deals/16_to_22_HUB_PC.jpg" alt="" className="checkout__ad" />

      {basket?.length ===0 ?(
        <div>
          <h2 className='checkout__title'>Your Shopping Basket is Empty !</h2>
        </div>
      ):(
        <div>
          <h2 className='checkout__title'>Your Shopping Basket :</h2>

          {/* List out all the checkout products */}
          {basket.map(item=>(
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

        </div>
      )}
      </div>

      {/* Basket Subtotal Right */}
      {
        basket.length>0 && (
          <div className="checkout__right">
            <h2>Subtotal</h2>
            <Subtotal/></div>
        )
      }
    </div>
    </div>
  )
}

export default Checkout
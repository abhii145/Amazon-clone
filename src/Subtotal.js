import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';


export default function Subtotal() {
    
    const [{ basket }, dispatch] = useStateValue();

  return (
      <div className='subtotal'>
          <CurrencyFormat 
              renderText={(value) => (
                  <>
                      <p>
                          Subtotal ({basket.length} items) :<small>$</small> <strong>{ value}</strong>
                 </p>     
                      <small className='subtotal__gift'>
                          <input type="checkbox" /> This order Contains a gift
                        </small>
                  </>
            )}              
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
          /> 
    <button>Procced To Checkout</button>      
</div>
  )
}



import React from 'react'
import { useProdduct } from '../../context/product-context';

const Cartcount:React.FC = () => {

    const {state}=useProdduct();
  return (
    <div className='font-bold'>
        <h1>Cart items {state.cart.length}</h1>
    </div>
  )
}

export default Cartcount;

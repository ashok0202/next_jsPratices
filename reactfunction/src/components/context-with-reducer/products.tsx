

import React from 'react'
import { products } from '../../db/products'
import Product from './product'
import type { IProduct } from '../../models/IProduct'
import Cartcount from './cartcount'


const Products:React.FC = () => {
  return (
    <>
    <Cartcount/>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((product: IProduct) => (
        <Product key={product._id} product={product} />
      ))}
      
    </div>

    </>
  )
}

export default Products

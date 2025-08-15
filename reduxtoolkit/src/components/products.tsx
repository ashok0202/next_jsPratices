import { useEffect, useState } from "react";
import Product from "./product";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
const Products = () => {

  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


  return(
    <div className="grid grid-cols-3 gap-4 h-fit items-center">
      {products.map((product: IProduct) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
};

export default Products;

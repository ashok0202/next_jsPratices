

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";
import type { IProduct } from "./products";
import { useDispatch } from "react-redux";
import { add } from "../slice/cartSlice"

const Product = ({ product }: { product: IProduct }) => {
  const dispatch = useDispatch()
  const addToCart = (product: IProduct) => {
    console.log(product);
    dispatch(add(product))
  }

  return (
    <div className="items-center">
      <Card>
        <CardHeader>
          <CardTitle>{product.title}</CardTitle>
          <img className="items-center"
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            src={product.image}
            alt={product.title}
          />

          <CardDescription>{product.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{product.price}</p>
        </CardContent>
        <CardFooter>
          <Button variant={"outline"} onClick={() => {addToCart(product)}}>Add To Cart</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Product;

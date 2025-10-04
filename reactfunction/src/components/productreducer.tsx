import React, { useMemo, useReducer } from "react";
import { filterReducer } from "../reducers/filterreducer";
import { products } from "../db/products";

const ProductReducer: React.FC = () => {
  const initialState = {
    price: "",
    discount: "",
    rating: "",
  };

  const [{ price, discount, rating }, filterDispatch] = useReducer(
    filterReducer,
    initialState
  );
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterDispatch({ type: "SET_PRICE", payload: e.target.value });
  };
  const handleDiscount = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterDispatch({ type: "SET_DISCOUNT", payload: e.target.value });
  };
  const handleRating = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterDispatch({ type: "SET_RATING", payload: e.target.value });
  };
  const filteredPrice =
    price > 0 ? products.filter(({ newPrice }) => newPrice <= price) : products;

  const filteredDiscount =
    discount > 0
      ? filteredPrice.filter((product) => product.discount > discount)
      : filteredPrice;


  const showiteams = useMemo(() => {
    return(
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {filteredDiscount.map((product) => (
        <div
          key={product._id}
          className="flex flex-col bg-white shadow-lg rounded-2xl border hover:shadow-xl transition-transform hover:scale-105 p-4"
        >
          {/* Product Image */}
          <div className="w-full h-40 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
            {product.img ? (
              <img
                src={product.img}
                alt={product.alt}
                className="object-contain h-full w-full rounded-lg"
              />
            ) : (
              <span className="text-gray-400">No Image</span>
            )}
          </div>

          {/* Product Name */}
          <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
            {product.name}
          </h2>

          {/* Price / Rating / Discount */}
          <div className="flex flex-col gap-1 text-sm text-gray-600">
            <p>
              <span className="font-semibold text-gray-900">Price:</span> ₹
              {product.newPrice}
            </p>
            <p>
              <span className="font-semibold text-gray-900">Rating:</span> ⭐
              {product.rating}
            </p>
            <p>
              <span className="font-semibold text-gray-900">Discount:</span>{" "}
              {product.discount}% OFF
            </p>
          </div>
        </div>
      ))}
    </div>)
  }, [filteredDiscount]);
  return (
    <>
      <h1 className="font-semibold">Products</h1>
      <div className="font-semibold flex gap-16">
        <span>Filters</span>
        <input onChange={handlePriceChange} placeholder="set price limit" />
        <input onChange={handleDiscount} placeholder="set discount" />
        <input onChange={handleRating} placeholder="set rating" />
      </div>
      {showiteams}
    </>
  );
};

export default ProductReducer;

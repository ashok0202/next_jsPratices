import React from "react";
import { useProdduct } from "../../context/product-context";
import type { IProduct } from "../../models/IProduct";

const Product: React.FC<{ product: IProduct }> = ({ product }) => {
  const { cartDispatch } = useProdduct();

  const handleAddCart = () => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const handleRemoveCart = () => {
    cartDispatch({
      type: "REMOVE_TO_CART",
      payload: product,
    });
  };
  return (
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
        <div className="space-x-2.5">
          <button
            onClick={handleAddCart}
            className="bg-blue-400 text-white font-semibold px-4 py-2 rounded-lg"
          >
            Add Cart
          </button>
          <button
            onClick={handleRemoveCart}
            className="bg-blue-400 text-white font-semibold px-4 py-2 rounded-lg"
          >
            Remove Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

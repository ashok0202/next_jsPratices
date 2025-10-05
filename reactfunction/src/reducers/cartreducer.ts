import type { ICartAction, ICartState } from "../context/product-context";

const cartReducerFn = (state: ICartState, action: ICartAction) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload!] };
    case "REMOVE_TO_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload?._id),
      };
    default:
      return state;
  }
};
export default cartReducerFn;

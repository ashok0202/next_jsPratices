import { useContext, createContext, useMemo, useReducer } from "react";
import cartReducerFn from "../reducers/cartreducer";
import type { IProduct } from "../models/IProduct";

export interface ICartState {
  cart: IProduct[];
}

 export interface ICartAction {
  type: string;
  payload?: IProduct;
}

// Define what your context value should look like
interface IProductContext {
  state: ICartState;
  cartDispatch: React.Dispatch<ICartAction>;
}
const ProductContext = createContext<IProductContext>({} as IProductContext);

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState: ICartState = {
    cart: [],
  };

  const [state, cartDispatch] = useReducer(cartReducerFn, initialState);

  const value = useMemo(() => ({ state, cartDispatch }), [state]);
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

const useProdduct = () => useContext(ProductContext);
export { ProductProvider, useProdduct };

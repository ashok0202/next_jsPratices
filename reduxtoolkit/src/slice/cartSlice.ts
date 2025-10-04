import type { IProduct } from "@/components/products";
import { createSlice, type PayloadAction} from "@reduxjs/toolkit";

const initialState: IProduct[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IProduct>) => {
      state.push(action.payload);
    },
  },
});

export const { add } = cartSlice.actions;
export default cartSlice.reducer;

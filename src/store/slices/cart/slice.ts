import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getCartFromLS } from "../../../utils/getCartFromLS";
import { calcTotalPrice } from "../../../utils/calcTotalPrice";
import { ICartItem,  ICartSliceState } from "./types";




const {items, totalPrice} = getCartFromLS();

const initialState:ICartSliceState = {
  totalPrice:totalPrice,
  items:items,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addItem: (state, action: PayloadAction<ICartItem>) => {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = calcTotalPrice(state.items)
    },

    minusItem: (state, action: PayloadAction<ICartItem>) => {
      const updatedItemCount = state.items.map((item) => ({
        ...item,
        count:
          item.id === action.payload.id && item.count > 1
            ? item.count - 1
            : item.count,
      }));
      state.items = updatedItemCount;
      const updatedItemPrice = updatedItemCount.reduce(
        (sum, item) => sum + item.count * item.price,
        0
      );
      state.totalPrice = updatedItemPrice;
   
    },

    removeItem: (state, action: PayloadAction<number>) => {
      const updatedProducts = state.items.filter(
        (item) => item.id !== action.payload
      );
      state.items = updatedProducts;
      const updatedPrice = updatedProducts.reduce(
        (sum, item) => sum + item.count * item.price,
        0
      );
      state.totalPrice = updatedPrice;

    },

    clearItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, minusItem } = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import AddToCart from '@/components/ui/AddToCart';

export interface CounterState {
  cart: Array<any>;
  totalAmount:number;
  totalQuantity:number;
}

const initialState: CounterState = {
  cart : [],
  totalAmount : 0,
  totalQuantity : 0,
}

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,actions:PayloadAction<any>) => {
      state.totalQuantity+=actions.payload.quantity;
    },
    removeFromCart: (state,actions:PayloadAction<any>) => {
      state.totalQuantity-=actions.payload.quantity;
    },
    clearCart: (state) => {
      state=initialState;
    },
  },
})

export const cartActions = counterSlice.actions;

export default counterSlice.reducer;
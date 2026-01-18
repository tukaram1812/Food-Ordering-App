import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      //Vanilla (older) Redux => Don't mutate the state. returining was mandotory
      //const newState = [...state]
      //newState.item.push(action.payload)
      //return newState

      //Redux ToolKit
      // We have to mutate the state , return is not mandotory
      // Redux uses immer behind the Scene for to mutate the state
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      // RTK - either mutate existing state or return a new state
      // state.items.length = 0; // originalState = []

      return { items: [] }; // this new object will be replaced inside originalState = { items: [] };
    },
  },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

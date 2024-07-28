// features/items/itemsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    updateItem(state, action) {
      const { id, newItem } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.items[index] = newItem;
      }
    },
    removeItem(state, action) {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
  },
});

export const { addItem, updateItem, removeItem } = itemsSlice.actions;

export default itemsSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IngredientCountState {
  [key: string]: {
    count: number;
    calories: number;
  };
}

const initialState: IngredientCountState = {};

const ingredientCountSlice = createSlice({
  name: "ingredientCount",
  initialState,
  reducers: {
    increment: (
      state,
      action: PayloadAction<{ ingredient: string; calories: number }>
    ) => {
      const { ingredient, calories } = action.payload;
      if (state[ingredient]) {
        state[ingredient].count += 1;
      } else {
        state[ingredient] = { count: 1, calories };
      }
    },
    decrement: (state, action: PayloadAction<string>) => {
      const ingredient = action.payload;
      if (state[ingredient] && state[ingredient].count > 0) {
        state[ingredient].count -= 1;
        if (state[ingredient].count === 0) {
          delete state[ingredient];
        }
      }
    },
  },
});

export const { increment, decrement } = ingredientCountSlice.actions;
export default ingredientCountSlice.reducer;

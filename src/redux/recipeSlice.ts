// Define the Recipe type
export type Recipe = {
  id?: string; // Optional id for unique identification
  name: string;
  calories: number;
};

// Update the addRecipe action creator to use the Recipe type
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
  name: "recipe",
  initialState: [] as Recipe[], // Initialize the state as an array of Recipe
  reducers: {
    addRecipe: (state, action: PayloadAction<Recipe>) => {
      state.push(action.payload);
    },
    // Add other reducers here
  },
});

export const { addRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;

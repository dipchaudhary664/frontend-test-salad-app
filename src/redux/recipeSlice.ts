import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

export type Recipe = {
  id: string; // Required id for unique identification
  name: string;
  calories: number;
};

const recipe = "recipes";

const loadFromLocalStorage = (): Recipe[] => {
  const savedRecipes = localStorage.getItem(recipe);
  return savedRecipes ? JSON.parse(savedRecipes) : [];
};

const saveToLocalStorage = (recipes: Recipe[]) => {
  localStorage.setItem(recipe, JSON.stringify(recipes));
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState: loadFromLocalStorage(), // Initialize the state from localStorage
  reducers: {
    addRecipe: (state, action: PayloadAction<Omit<Recipe, "id">>) => {
      const newRecipe: Recipe = { ...action.payload, id: nanoid() };
      state.push(newRecipe);
      saveToLocalStorage(state); // Save to localStorage whenever a recipe is added
    },
    deleteRecipe: (state, action: PayloadAction<string>) => {
      const updatedRecipes = state.filter(
        (recipe) => recipe.id !== action.payload
      );
      saveToLocalStorage(updatedRecipes);
      return updatedRecipes;
    },
    editRecipe: (state, action: PayloadAction<Recipe>) => {
      const { id, name, calories } = action.payload;
      const updatedRecipes = state.map((recipe) =>
        recipe.id === id ? { ...recipe, name, calories } : recipe
      );
      saveToLocalStorage(updatedRecipes);
      return updatedRecipes;
    },
  },
});

export const { addRecipe, deleteRecipe, editRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;

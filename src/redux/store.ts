import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slice";
import ingredientCountReducer from "./ingredientCountSlice";
import recipeReducer from "./recipeSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    ingredientCount: ingredientCountReducer,
    recipes: recipeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

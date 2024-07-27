import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// Define the Ingredient interface
interface Ingredient {
  ingredient: string;
  category: "vegetable" | "fruit" | "protein" | "dressing";
  image: string | null;
  calories: number;
}

// Define the initial state
interface DataState {
  data: Ingredient[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: DataState = {
  data: [],
  status: "idle",
  error: null,
};

// Fetch ingredient data from a local JSON file
export const fetchIngredientData = createAsyncThunk(
  "data/fetchIngredientData",
  async () => {
    const response = await axios.get("/ingredient.json");
    return response.data;
  }
);

// Create the slice
const dataSlice = createSlice({
  name: "ingredient",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredientData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchIngredientData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchIngredientData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});

export default dataSlice.reducer;

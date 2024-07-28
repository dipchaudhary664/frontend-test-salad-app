// slice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Ingredient {
  ingredient: string;
  category: "vegetable" | "fruit" | "protein" | "dressing";
  image: string | null;
  calories: number;
}

interface DataState {
  data: Ingredient[];
  filteredData: Ingredient[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: DataState = {
  data: [],
  filteredData: [],
  status: "idle",
  error: null,
};

export const fetchIngredientData = createAsyncThunk(
  "data/fetchIngredientData",
  async () => {
    const response = await axios.get("/ingredient.json");
    return response.data;
  }
);

const dataSlice = createSlice({
  name: "ingredient",
  initialState,
  reducers: {
    filterData: (state, action) => {
      if (action.payload.length === 0) {
        state.filteredData = state.data;
      } else {
        state.filteredData = state.data.filter((ingredient) =>
          action.payload.includes(ingredient.category)
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredientData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchIngredientData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.filteredData = action.payload;
      })
      .addCase(fetchIngredientData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});

export const { filterData } = dataSlice.actions;
export default dataSlice.reducer;

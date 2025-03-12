import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const APP_KEY = import.meta.env.VITE_APP_KEY;

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async (query) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${APP_KEY}`
    );
    const data = await response.json();
    const recipesWithDetails = await Promise.all(
      data.results.map(async (recipe) => {
        const detailsResponse = await fetch(
          `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${APP_KEY}`
        );
        const details = await detailsResponse.json();
        return { ...recipe, ...details };
      })
    );
    return recipesWithDetails;
  }
);

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
    loading: false,
    error: null,
  },
  reducers: {
    addRecipeToFavorites: (state, action) => {
      const recipe = action.payload;
      const isFavorite = state.recipes.some((r) => r.id === recipe.id);
      if (!isFavorite) {
        state.recipes.push(recipe);
      }
    },
    removeRecipeFromFavorites: (state, action) => {
      const recipeId = action.payload;
      state.recipes = state.recipes.filter((r) => r.id !== recipeId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.recipes = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addRecipeToFavorites, removeRecipeFromFavorites } =
  recipesSlice.actions;

export default recipesSlice.reducer;

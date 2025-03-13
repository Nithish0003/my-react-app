import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const APP_KEY = "ca391d97da2c486fb7f7ef34fc7832cb";

const loadFavoritesFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("favorites");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Could not load favorites from local storage", e);
    return [];
  }
};

const saveFavoritesToLocalStorage = (favorites) => {
  try {
    const serializedState = JSON.stringify(favorites);
    localStorage.setItem("favorites", serializedState);
  } catch (e) {
    console.warn("Could not save favorites to local storage", e);
  }
};

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
    favorites: loadFavoritesFromLocalStorage(),
    loading: false,
    error: null,
  },
  reducers: {
    addRecipeToFavorites: (state, action) => {
      const recipe = action.payload;
      const isFavorite = state.favorites.some((r) => r.id === recipe.id);
      if (!isFavorite) {
        state.favorites.push(recipe);
        saveFavoritesToLocalStorage(state.favorites);
      }
    },
    removeRecipeFromFavorites: (state, action) => {
      const recipeId = action.payload;
      state.favorites = state.favorites.filter((r) => r.id !== recipeId);
      saveFavoritesToLocalStorage(state.favorites);
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

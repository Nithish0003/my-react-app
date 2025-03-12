import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "../features/recipeSlice";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
});

export default store;

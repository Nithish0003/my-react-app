import { Search } from "lucide-react";
import RecipeCard from "../components/RecipeCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRecipes } from "../features/recipeSlice";
import { getRandomColor } from "../lib/utils";

export default function HomePage() {
  const dispatch = useDispatch();
  const { recipes, loading } = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipes("chicken"));
  }, [dispatch]);

  const handleSearchRecipe = (event) => {
    event.preventDefault();
    const query = event.target[0].value;
    dispatch(fetchRecipes(query));
  };

  return (
    <div className="flex-1 p-10 bg-slate-200">
      <div className="max-w-screen-lg mx-auto">
        <form onSubmit={handleSearchRecipe}>
          <label className="input shadow-md flex items-center gap-2 bg-slate-100">
            <Search size={"24"} />
            <input
              type="text"
              className="text-sm md:text-md grow"
              placeholder="What you want to cook today?"
            />
          </label>
        </form>
        <p className="font-bold text-3xl md:text-5xl mt-4">
          Recommended Recipes
        </p>
        <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
          Popular choices
        </p>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {!loading &&
            recipes.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} {...getRandomColor()} />
            ))}
          {loading &&
            Array.from({ length: 9 }).map((_, index) => (
              <div key={index} className="flex w-52 flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                  <div className="flex flex-col gap-4">
                    <div className="skeleton h-4 w-20"></div>
                    <div className="skeleton h-4 w-28"></div>
                  </div>
                </div>
                <div className="skeleton h-32 w-full"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

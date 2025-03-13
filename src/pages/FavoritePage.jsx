import img404 from "../assets/404.svg";
import RecipeCard from "../components/RecipeCard";
import { getRandomColor } from "../lib/utils";
import { useSelector } from "react-redux";

export default function FavoritePage() {
  const favorites = useSelector((state) => state.recipes.favorites);

  return (
    <div className="flex-1 p-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <p className="font-bold text-3xl md:text-5xl my-4">My Favorites</p>
        {favorites.length === 0 && (
          <div className="h-[80vh] flex flex-col items-center gap-4">
            <img src={img404} className="h-3/4" alt="404 svg" />
          </div>
        )}
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {favorites.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} {...getRandomColor()} />
          ))}
        </div>
      </div>
    </div>
  );
}

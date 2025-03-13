import { Heart, HeartPulse, Soup } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  addRecipeToFavorites,
  removeRecipeFromFavorites,
} from "../features/recipeSlice";

export default function RecipeCard({ recipe, bg, badge }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.recipes.favorites);
  const isFavorite = favorites.some((fav) => fav.id === recipe.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeRecipeFromFavorites(recipe.id));
    } else {
      dispatch(addRecipeToFavorites(recipe));
    }
  };

  const sliceArr = (arr) => {
    return [arr[0], arr[1]];
  };

  const healthLabels = sliceArr(recipe.diets);

  return (
    <div
      className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative`}
    >
      <a
        href={`https://www.youtube.com/results?search_query=${recipe.title} recipe`}
        target="_blank"
        className="relative h-32"
      >
        <img
          src={recipe.image}
          alt="recipe img"
          className="rounded-md w-full h-full object-cover cursor-pointer"
        />
        <div className="absolute bottom-2 left-2 rounded-full p-1 cursor-pointer flex items-center gap-2 text-sm bg-slate-100">
          <Soup size={"16"} /> {recipe.servings} Servings
        </div>
        <div
          className="absolute top-1 right-2 bg-slate-200 rounded-full p-1 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            handleFavoriteClick();
          }}
        >
          {!isFavorite && (
            <Heart
              size={"16"}
              className="hover:fill-red-500 hover:text-red-500"
            />
          )}
          {isFavorite && (
            <Heart size={"16"} className="fill-red-500 text-red-500" />
          )}
        </div>
      </a>
      <div className="flex mt-1">
        <p className="font-bold tracking-wide ">{recipe.title}</p>
      </div>
      <p className="my-2">{recipe.cuisines.join(", ")} Kitchen</p>
      <div className="flex gap-2 mt-auto">
        {healthLabels.map((label, index) => (
          <div
            key={index}
            className={`flex gap-1 ${badge} items-center p-1 rounded-md`}
          >
            <HeartPulse size={"16"} />
            <span className="text-sm tracking-tighter font-semibold">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

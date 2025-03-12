import { useState } from "react";

export default function UpdateArrays() {
  const [food, setFood] = useState([
    "Apple",
    "Banana",
    "Cherry",
    "Dates",
    "Elderberry",
  ]);
  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFood((f) => [...f, newFood]);
  }
  function handleRemoveFood(index) {
    // const newFood = document.getElementById("foodInput").value;
    // document.getElementById("foodInput").value = "";
    // setFood(food.filter((item) => item !== newFood));
    setFood((f) => f.filter((_, i) => i !== index));
  }
  return (
    <div className=" font-sans">
      <h1 className=" text-4xl p-1 font-bold">List of Food</h1>
      <ul className=" list-disc list-inside text-2xl p-2 cursor-pointer">
        {food.map((item, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {item}
          </li>
        ))}
      </ul>
      <input
        className=" border-2 p-1.5 m-2"
        id="foodInput"
        type="text"
        placeholder="Enter the food"
      />
      <button
        className=" cursor-pointer border-2 p-1.5 m-1 bg-blue-300 rounded-lg"
        onClick={handleAddFood}
      >
        Add Food
      </button>
      {/* <button
        className=" cursor-pointer border-2 p-1.5 m-1 bg-blue-300 rounded-lg"
        onClick={handleRemoveFood}
      >
        Remove Food
      </button> */}
    </div>
  );
}

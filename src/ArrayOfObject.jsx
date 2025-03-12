import { useState } from "react";

export default function ArrayOfObject() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");
  function handleAddCar() {
    const newCars = { year: carYear, make: carMake, model: carModel };
    setCars((c) => [...c, newCars]);
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }
  function handleRemoveCar(index) {
    setCars((c) => c.filter((_, i) => i != index));
  }
  function handleYearChange(event) {
    setCarYear(event.target.value);
  }
  function handleMakeChange(event) {
    setCarMake(event.target.value);
  }
  function handleModelChange(event) {
    setCarModel(event.target.value);
  }
  return (
    <div className=" font-sans text-gray-700">
      <h1 className="text-4xl font-bold p-2">List of Car objects</h1>
      <ul className=" list-disc list-inside text-xl pl-3 p-1 cursor-pointer">
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>
      <input
        className="border-2 p-1 m-1 ml-2 text-xl"
        type="number"
        value={carYear}
        onChange={handleYearChange}
      />{" "}
      <br />
      <input
        className="border-2 p-1 m-1 ml-2 text-xl"
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="Enter car make"
      />{" "}
      <br />
      <input
        className="border-2 p-1 m-1 ml-2 text-xl"
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Enter car model"
      />{" "}
      <br />
      <button
        className="border-2 p-2 ml-20 m-2 cursor-pointer rounded-2xl bg-blue-200 font-black"
        onClick={handleAddCar}
      >
        Add Car
      </button>
    </div>
  );
}

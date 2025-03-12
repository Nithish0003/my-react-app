import { useState } from "react";

export default function UpdateObj() {
  const [car, setCar] = useState({
    year: 2020,
    make: "Ford",
    model: "Mustang",
  });
  function handleYearChange(event) {
    setCar((c) => ({ ...c, year: event.target.value }));
  }
  function handleMakeChange(event) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }
  function handleModelChange(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }
  return (
    <div className="font-sans text-2xl text-center text-gray-700">
      <p className="font-semibold p-2 m-1">
        My favorite car is: {car.make} {car.model} - [{car.year}]
      </p>
      <input
        type="number"
        value={car.year}
        onChange={handleYearChange}
        className=" border-2 m-1.5 p-1"
      />{" "}
      <br />
      <input
        type="text"
        value={car.make}
        onChange={handleMakeChange}
        className=" border-2 m-1.5 p-1"
      />{" "}
      <br />
      <input
        type="text"
        value={car.model}
        onChange={handleModelChange}
        className=" border-2 m-1.5 p-1"
      />{" "}
      <br />
    </div>
  );
}

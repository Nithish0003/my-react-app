import { useState } from "react";
function Component() {
  let [name, setName] = useState("Guest");
  let [age, setAge] = useState(0);
  let [isEmployed, setIsEmployed] = useState(false);
  const updateName = () => {
    setName("Luffy");
  };
  const updateAge = () => {
    setAge(age + 1);
  };
  const updateEmployed = () => {
    setIsEmployed(!isEmployed);
  };
  return (
    <div>
      <p>Name: {name}</p>
      <button
        className=" border-2 p-1 cursor-pointer bg-gray-300 rounded-2xl"
        onClick={updateName}
      >
        Set Name
      </button>
      <p>Age: {age}</p>
      <button
        className=" border-2 p-1 cursor-pointer bg-gray-300 rounded-2xl"
        onClick={updateAge}
      >
        Set Age
      </button>
      <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
      <button
        className=" border-2 p-1 cursor-pointer bg-gray-300 rounded-2xl"
        onClick={updateEmployed}
      >
        Set Employment
      </button>
    </div>
  );
}
export default Component;

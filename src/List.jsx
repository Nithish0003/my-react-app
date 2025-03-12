import propTypes from "prop-types";

function List(props) {
  const itemList = props.items;
  const category = props.category;
  //  fruits.sort((a, b) => a.name.localeCompare(b.name)); //asc name
  //  fruits.sort((a, b) => b.name.localeCompare(a.name)); //desc name
  //  fruits.sort((a, b) => a.calories - b.calories); //asc cal
  //  fruits.sort((a, b) => b.calories - a.calories); //desc cal
  // low calorie fruits
  //   const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
  //   const fruitList = lowCalFruits.map((lowCalFruit) => (
  //     <li key={lowCalFruit.name}>
  //       {lowCalFruit.name}: &nbsp;<b>{lowCalFruit.calories}</b>
  //     </li>
  //   ));
  // high calorie fruits
  //   const highCalFruits = fruits.filter((fruit) => fruit.calories > 100);
  //   const fruitList = highCalFruits.map((highCalFruit) => (
  //     <li key={highCalFruit.name}>
  //       {highCalFruit.name}: &nbsp;<b>{highCalFruit.calories}</b>
  //     </li>
  //   ));
  // using props
  const fruitList = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp; <b>{item.calories}</b>
    </li>
  ));
  return (
    <>
      <h1 className=" text-4xl font-bold mb-4 text-center border-3 rounded-2xl bg-[#09a5ed] text-gray-700 font-sans p-2">
        {category}
      </h1>
      <ol className=" text-2xl text-gray-500 font-sans text-center m-0 mb-4 cursor-pointer hover:text-gray-800">
        {fruitList}
      </ol>
    </>
  );
}

List.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      name: propTypes.string,
      calories: propTypes.number,
    })
  ).isRequired,
  category: propTypes.string.isRequired,
};

List.defaultProps = {
  items: [],
  category: "category",
};

export default List;

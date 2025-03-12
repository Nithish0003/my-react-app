import PropTypes from "prop-types";

function Student(props) {
  return (
    <div className=" font-sans text-2xl border-1 border-gray-500">
      <div className="m-0">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "yes" : "No"}</p>
      </div>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool.isRequired,
};

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};

export default Student;

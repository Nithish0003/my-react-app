import PropTypes from "prop-types";

function CardProps(props) {
  return (
    <div className="border-1 border-gray-300 rounded-2xl p-2 m-2 text-center flex flex-col items-center shadow-[5px_5px_5px_rgba(0,0,0,0.1)] max-w-[250px] font-sans">
      <img
        className=" w-50 h-50 rounded-full mb-3.5"
        src={props.img}
        alt="profile image"
      />
      <h2>{props.name}</h2>
      <p>{props.desc}</p>
    </div>
  );
}

CardProps.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

CardProps.defaultProps = {
  name: "Guest",
  desc: "No description",
  img: "default-image-url",
};
export default CardProps;

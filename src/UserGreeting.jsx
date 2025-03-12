import PropTypes from "prop-types";

function UserGreeting(props) {
  return props.isLoggedIn ? (
    <h1 className="welcome bg-[#51a66bd5] text-white border-r-4 text-center">
      Welcome {props.name}
    </h1>
  ) : (
    <h1 className="login-prompt bg-[hsl(0,56%,57%)] text-white text-center">
      Please login to continue..
    </h1>
  );
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default UserGreeting;

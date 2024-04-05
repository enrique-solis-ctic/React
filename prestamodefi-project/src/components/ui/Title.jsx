import PropTypes from "prop-types";

export default function Title({ children }) {
  return (
    <h3 className="text-sm font-bold text-transparent transition-all duration-300 ease-in-out shadow-lg cursor-pointer sm:text-xl bg-clip-text bg-gradient-to-r from-cyan-300 to-lime-300 hover:from-cyan-400 hover:to-lime-400">
      {children}
    </h3>
  );
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

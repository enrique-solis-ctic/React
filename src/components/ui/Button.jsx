import { PropTypes } from "prop-types";
import LoadingSpinner from "./LoadingSpinner";

export default function Button({
  type = "button",
  disabled,
  children,
  onClick,
  isLoading,
}) {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center px-4 py-2 border border-transparent 
      rounded-full shadow-lg text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-rose-500 
      hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-pink-300 focus:ring-offset-2 
      disabled:opacity-50 disabled:cursor-not-allowed transition ease-in-out duration-300 transform hover:scale-105 ${
        isLoading ? "opacity-75" : ""
      }`}
    >
      {isLoading ? (
        <span className="absolute flex items-center justify-center">
          <LoadingSpinner className="w-5 h-5 text-white" />
        </span>
      ) : (
        <span className="flex items-center gap-2">{children}</span>
      )}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

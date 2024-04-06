import { MdInfoOutline } from "react-icons/md";
import PropTypes from "prop-types";

export default function ErrorInfo({ message }) {
  return (
    <div className="flex items-center w-full max-w-md gap-2 px-4 py-3 font-semibold text-pink-800 transition duration-300 ease-in-out bg-red-200 border border-red-300 rounded-lg shadow-md hover:bg-red-300 animate-pulse">
      <MdInfoOutline className="text-2xl" aria-hidden="true" />
      <p>{message}</p>
    </div>
  );
}

ErrorInfo.propTypes = {
  message: PropTypes.string,
};

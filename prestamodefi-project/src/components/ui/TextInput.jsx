import PropTypes from "prop-types";

function TextInput({
  type,
  onChange,
  value,
  placeholder,
  disabled,
  className,
}) {
  return (
    <input
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      className={`bg-pink-50 border border-pink-300 text-pink-700 placeholder-pink-300 
      rounded-lg w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent 
      transition duration-300 ease-in-out ${className}`}
    />
  );
}

TextInput.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default TextInput;

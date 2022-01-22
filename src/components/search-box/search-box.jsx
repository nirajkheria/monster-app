import "./search-box.css";

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search"
      placeholder={placeholder}
      type="search"
      onChange={handleChange}
    />
  );
};

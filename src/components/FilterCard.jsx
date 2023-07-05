import { PropTypes } from "prop-types";

const FilterCard = ({ title, icon, handleFilter, selectedCategory }) => {
  return (
    <div
      onClick={() => handleFilter(title)}
      role="button"
      tabIndex={0}
      className={`outline-none flex-1 flex flex-col items-center justify-center gap-2 h-full p-2 bg-white text-gray-500 cursor-pointer group-hover:border-b-2  ${
        selectedCategory.toLowerCase() === title.toLowerCase() &&
        "border-b-2 border-pink-primary"
      }`}
    >
      <div className="w-5 h-5">
        <img
          src={icon}
          alt={title}
          className="h-full w-full object-contain aspect-square"
          loading="lazy"
        />
      </div>
      <p className="text-center text-xs w-max font-medium group-hover:text-gray-900">
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </p>
    </div>
  );
};

export default FilterCard;

FilterCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
};

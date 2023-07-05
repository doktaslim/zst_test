import { PropTypes } from "prop-types";

const FilterCard = ({ title, icon }) => {
  return (
      <div className="flex-1 flex flex-col items-center justify-center gap-2 p-2 rounded-md bg-white text-gray-500 cursor-pointer group-hover:border-b-2 ">
        <div className="w-5 h-5">
          <img
            src={icon}
            alt={title}
            className="h-full w-full object-contain aspect-square"
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
};

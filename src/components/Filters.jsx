import Proptypes from "prop-types";

import { filterCategories } from "../constant/filterCategories";
import FilterCard from "./FilterCard";
import { mockDataArray } from "../utils";

const Filters = ({ setProperties, selectedCategory, setSelectedCategory }) => {
  const handleFilter = (category) => {
    setProperties(mockDataArray.filter(property => property.category.toLowerCase() === category.toLowerCase()))
    setSelectedCategory(category)
  };
  return (
    <div className="z-50 h-20 sticky top-20 bg-white px-3 md:px-0 shadow-sm">
      <div className="container mx-auto w-full overflow-x-scroll scroll h-full flex items-center">
        <div className="flex items-center justify-between space-x-3 h-full">
          {filterCategories.map(({ title, icon }) => (
            <FilterCard
              key={title}
              title={title}
              icon={icon}
              handleFilter={handleFilter}
              selectedCategory={selectedCategory}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;

Filters.propTypes = {
  setProperties: Proptypes.func.isRequired,
  selectedCategory: Proptypes.string.isRequired,
  setSelectedCategory: Proptypes.func.isRequired,
};


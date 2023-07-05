import { useRef } from "react";
import Proptypes from "prop-types";

import { filterCategories } from "../constant/filterCategories";
import FilterCard from "./FilterCard";
import { mockDataArray } from "../utils";

const Filters = ({ setProperties, selectedCategory, setSelectedCategory }) => {
  const scrollContainerRef = useRef(null);

  const handleFilter = (category) => {
    setProperties(
      mockDataArray.filter(
        (property) => property.category.toLowerCase() === category.toLowerCase()
      )
    );
    setSelectedCategory(category);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      return scrollContainerRef.current.scrollLeft -= 100;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      return scrollContainerRef.current.scrollLeft += 100;
    }
  };
  return (
    <div className="z-50 h-20 sticky top-20 bg-white px-3 md:px-0 shadow-sm group">
      <div className="container mx-auto w-full overflow-x-auto scroll h-full flex items-center">
        <div className="flex items-center relative w-full h-full">
          <div
            className="overflow-x-scroll w-full md:w-[85dvw] scroll h-full snap-proximity"
            ref={scrollContainerRef}
          >
            <div className="snap-center flex items-center justify-between space-x-3 h-full">
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

          <button
            className="hidden md:block md:group-hover:block absolute left-0 rounded-full border p-1 bg-white"
            onClick={scrollLeft}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            className="hidden md:block md:group-hover:block relative rounded-full border p-1 bg-white"
            onClick={scrollRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          <div className="hidden absolute right-0 md:block border rounded-2xl p-3 bg-white">
            <div className="flex items-center space-x-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                  />
                </svg>
              </span>
              <p className="text-xs font-semibold">Filters</p>
            </div>
          </div>
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

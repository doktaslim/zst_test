import { filterCategories } from "../constant/filterCategories";
import FilterCard from "./FilterCard";

const Filters = () => {
  return (
    <div className="z-50 h-20 sticky top-20 bg-white px-3 md:px-0 shadow-sm">
      <div className="container mx-auto w-full overflow-x-scroll scroll h-full flex items-center">
        <div className="flex items-center justify-between space-x-3">
          {filterCategories.map(({ title, icon }) => (
            <FilterCard
              key={title}
              title={title}
              icon={icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;

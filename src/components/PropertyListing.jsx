import PropertyCard from "./PropertyCard";
import Proptypes from "prop-types";

const PropertyListing = ({ properties, setProperties, selectedCategory }) => {
  const handleLike = (id) => {
    setProperties((prev) =>
      prev.map((property) =>
        property.id === id ? { ...property, liked: !property.liked } : property
      )
    );
  };

  return (
    <main className="px-3 md:px-0 pb-20 pt-4">
      <div className="container mx-auto h-full w-full">
        {!properties.length ? (
          <div className="flex flex-col items-center justify-center h-[60dvh]">
            <h4 className="text-center font-semibold">
              No properties found for {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} category
            </h4>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {properties.map(
              ({
                id,
                propertyTitle,
                propertyImage,
                pricePerNight,
                availableNights,
                liked,
                hostname,
                rating,
              }) => (
                <PropertyCard
                  key={id}
                  id={id}
                  propertyTitle={propertyTitle}
                  propertyImage={propertyImage}
                  pricePerNight={pricePerNight}
                  availableNights={availableNights}
                  handleLike={handleLike}
                  liked={liked}
                  hostname={hostname}
                  rating={rating}
                />
              )
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default PropertyListing;

PropertyListing.propTypes = {
  properties: Proptypes.array.isRequired,
  setProperties: Proptypes.func.isRequired,
  selectedCategory: Proptypes.string.isRequired,
};

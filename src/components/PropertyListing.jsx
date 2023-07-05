import { useState } from "react";
import PropertyCard from "./PropertyCard";
import { mockDataArray } from "../utils";

const PropertyListing = () => {
  const [properties, setProperties] = useState(mockDataArray)

  const handleLike = (title) => {
    const updatedProperties = properties.map((property) => {
      if (property.propertyTitle === title) {
        return { ...property, liked: !property.liked };
      }
      return property;
    });
    setProperties(updatedProperties);
  };

  return (
    <main className="px-3 md:px-0 pb-20 pt-4">
      <div className="container mx-auto h-full w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map(({id, propertyTitle, propertyImage, pricePerNight, availableNights, liked, hostname, rating }) => (
            <PropertyCard
              key={id}
              propertyTitle={propertyTitle}
              propertyImage={propertyImage}
              pricePerNight={pricePerNight}
              availableNights={availableNights}
              handleLike={handleLike}
              liked={liked}
              hostname={hostname}
              rating={rating}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default PropertyListing;

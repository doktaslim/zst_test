import { PropTypes } from "prop-types";

const PropertyCard = ({
  propertyTitle,
  propertyImage,
  pricePerNight,
  availableNights,
  liked,
  handleLike,
  hostname,
  rating,
}) => {
  return (
    <div className="h-full min-w-full cursor-pointer relative">
      <div className="outline-none absolute top-4 right-4" onClick={() => handleLike(propertyTitle)} role='button' tabIndex={0}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={liked ? "#FF385C" : "#323232"}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </div>
      <div className="h-[270px] w-full bg-zinc-50 rounded-xl border overflow-hidden">
        <img
          src={propertyImage}
          alt={propertyTitle}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mt-1 text-sm">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold">{propertyTitle}</p>
          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#0D0D0D"
              viewBox="0 0 24 24"
              strokeWidth={0.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            <span className="font-medium text-sm">{rating}</span>
          </p>
        </div>

        <p className='text-zinc-500'>Hosted by {hostname}</p>
        <p className='text-zinc-500'>{availableNights}</p>

        <p className='mt-1 underline underline-offset-2'>
          <span className="font-semibold">${pricePerNight}</span>{' '}
          per night
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;

PropertyCard.propTypes = {
  propertyTitle: PropTypes.string.isRequired,
  propertyImage: PropTypes.string.isRequired,
  pricePerNight: PropTypes.number.isRequired,
  availableNights: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  handleLike: PropTypes.func.isRequired,
  hostname: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const MapView = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAq6bq5AE-C1-W9TctjkqiU4ExKGAWf_p4",
  });

  if (loadError) {
    return (
      <div className="h-[80dvh] grid place-items-center">
        <p className="text-center font-medium">Error occured loading maps</p>
      </div>
    );
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{
        height: "100%",
        width: "100%",
      }}
      zoom={9}
      center={{ lat: -34.397, lng: 150.644 }}
      options={{
        zoomControl: true,
      }}
    >

    </GoogleMap>
  ) : (
      <div className="h-[80dvh] grid place-items-center">
        <p className="text-center font-medium">Loading maps...</p>
      </div>
  )
};

export default MapView;
import React from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

const Map = () => {
  const key: string = process.env.REACT_APP_GOOGLE_MAP_API_KEY ?? "";
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: key,
  });

  const RenderMap = () => {
    return (
      <GoogleMap
        zoom={16}
        center={{ lat: 12.7873172, lng: 101.1645584 }}
        mapContainerClassName="map-container"
      >
        <MarkerF position={{ lat: 12.7873172, lng: 101.1645584 }} />
      </GoogleMap>
    );
  };

  if (!isLoaded) return <h1>Loading...</h1>;
  return <RenderMap />;
};

export default Map;

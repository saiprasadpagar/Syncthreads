//NPM Google Map React Library
import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Card6() {

  

  const { isLoaded } = useLoadScript({
    googleMapsApiKey:window.process.emv.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>...Loding</div>;
  return <map />;
};

const center = { lat: 44, lng: -80 }
const map = () => {
  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName="map-container">
<Marker position={center}/>

</GoogleMap>
      

  );
};

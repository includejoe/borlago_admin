/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoogleMap as Map, LoadScript, Marker } from "@react-google-maps/api";

import { countries, Country } from "@utils/countries";

interface GoogleMapsProps {
  country: string;
  latitude?: any;
  longitude?: any;
}

const GoogleMap: React.FC<GoogleMapsProps> = ({
  latitude,
  longitude,
  country,
}) => {
  const apiKey = import.meta.env.VITE_REACT_GOOGLE_MAPS_API_KEY;
  const defaultCenter = countries.find((c: Country) => c.country === country);

  const center = {
    lat: latitude ?? defaultCenter?.latitude,
    lng: longitude ?? defaultCenter?.longitude,
  };

  const containerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "5px",
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <Map mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} visible={true} icon="" opacity={1} />
      </Map>
    </LoadScript>
  );
};

export default GoogleMap;

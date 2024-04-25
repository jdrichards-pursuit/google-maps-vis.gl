import { useState, useEffect } from "react";
import axios from "axios";

import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";

import AdvancedMarker from "./AdvancedMarker";

function App() {
  const { VITE_API_KEY } = import.meta.env;
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      const response = await axios.get(
        "https://maps.googleapis.com/maps/api/place/nearbysearch/json",
        {
          params: {
            key: VITE_API_KEY,
            radius: 5000,
            location: " 48.864716,2.349014",
            type: "restaurant", // Forward query parameters from the client to the Google Maps API
          },
        }
      );
      setPlaces(response.data.results);
      console.log(response.data);
    };
    fetchPlaces();
  }, []);

  return (
    <APIProvider apiKey={VITE_API_KEY}>
      <Map
        mapId={"2a1653e64c33bca"}
        style={{ width: "100vw", height: "100vh" }}
        defaultCenter={{ lat: 48.864716, lng: 2.349014 }}
        defaultZoom={13}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      />
      <AdvancedMarker places={places} />
    </APIProvider>
  );
}
export default App;

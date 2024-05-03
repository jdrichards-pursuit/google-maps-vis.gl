import { useState } from "react";

import {
  AdvancedMarker,
  Pin,
  InfoWindow,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";

function Markers({ places }) {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [marker, setMarker] = useState(null);
  // const [markerRef, marker] = useAdvancedMarkerRef();
  const [infowindowOpen, setInfowindowOpen] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        {places.map((place) => (
          <div key={place.place_id}>
            <AdvancedMarker
              ref={marker}
              position={{
                lat: place.geometry.location.lat,
                lng: place.geometry.location.lng,
              }}
              title={place.name}
              onClick={() => {
                setSelectedPlace(place);
                setInfowindowOpen(true);
              }}
            >
              {/* <div
              style={{
                width: 20,
                height: 16,
                position: "absolute",
                top: 0,
                left: 0,
                background: "#1dbe80",
                border: "2px solid #0e6443",
                borderRadius: "50%",
                transform: "translate(-50%, -50%)",
              }}
            ></div> */}
              <Pin
                background={"purple"}
                borderColor={"black"}
                glyphColor={"#0f677a"}
              ></Pin>
            </AdvancedMarker>
            {infowindowOpen && (
              <InfoWindow
                anchor={setMarker}
                maxWidth={200}
                position={{
                  lat: selectedPlace.geometry.location.lat + 0.002,
                  lng: selectedPlace.geometry.location.lng + 0.0001,
                }}
                onCloseClick={() => {
                  setSelectedPlace(null);
                  setInfowindowOpen(false);
                }}
              >
                <p>{selectedPlace.name}</p>
                <p>{selectedPlace.vicinity}</p>
                <p>Rating:{selectedPlace.rating}</p>
              </InfoWindow>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Markers;

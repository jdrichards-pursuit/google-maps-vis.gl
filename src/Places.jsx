import React from "react";

function Places({ places }) {
  return (
    <div style={{ width: "40vw" }}>
      <ul>
        {places.map((place) => (
          <li
            style={{ height: 50, marginLeft: 2, fontFamily: "sans-serif" }}
            key={place.place_id}
          >
            <p> {place.name}</p>
            <p> {place.vicinity}</p>
            <hr style={{ marginTop: 5 }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Places;

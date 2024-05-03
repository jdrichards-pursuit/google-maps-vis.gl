import React from "react";

function Buttons({ setType }) {
  return (
    <div>
      <div style={{ margin: "0 10px 10px 10px" }}>
        <button onClick={() => setType("restaurant")}>Restaurants</button>
        <button onClick={() => setType("lodging")}>Lodging</button>
        <button onClick={() => setType("shopping_mall")}>Shopping</button>
        <button onClick={() => setType("movie_theater")}>Entertainment</button>
        <button onClick={() => setType("hospital")}>Healthcare</button>
        <button onClick={() => setType("airport")}>Transportation</button>
        <button onClick={() => setType("park")}>Outdoor</button>
        <button onClick={() => setType("bank")}>Services</button>
      </div>
    </div>
  );
}

export default Buttons;

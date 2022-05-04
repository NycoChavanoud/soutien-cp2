import React from "react";
import { Link } from "react-router-dom";

const CharactersCard = ({ fullName, title, family, id }) => {
  return (
    <Link to={`/characters/${id}`}>
      <div
        style={{
          display: "flex",
          width: "80%",
          height: "50px",
          border: "solid 2px grey",
          justifyContent: "space-around",
          margin: "15px auto",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "1.2em" }}> {fullName} </div>
          <div style={{ fontSize: "0.8em" }}> {title} </div>
        </div>
        <div style={{ fontSize: "1.2em" }}> {family}</div>
      </div>
    </Link>
  );
};

export default CharactersCard;

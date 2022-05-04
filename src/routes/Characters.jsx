import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Characters = () => {
  const { id } = useParams();
  const [charactersDetails, setCharactersDetails] = useState("");

  useEffect(() => {
    axios
      .get(`https://thronesapi.com/api/v2/Characters/${id}`)
      .then((res) => setCharactersDetails(res.data));
  }, [id]);

  console.log(charactersDetails);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <div>{charactersDetails.firstName}</div>
      <div>{charactersDetails.lastName}</div>
      <img src={charactersDetails.imageUrl} alt={charactersDetails.fullName} />
      <div>{charactersDetails.title}</div>
      <div>{charactersDetails.family}</div>
    </div>
  );
};

export default Characters;

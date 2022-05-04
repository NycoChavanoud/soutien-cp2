import axios from "axios";
import React, { useEffect, useState } from "react";
import CharactersCard from "../components/CharactersCard";

const Home = () => {
  const [charactersList, setCharctersList] = useState([]);
  useEffect(() => {
    axios
      .get("https://thronesapi.com/api/v2/Characters")
      .then((res) => setCharctersList(res.data));
  }, []);

  if (!charactersList) {
    return <span>LOADING...</span>;
  }

  return (
    <>
      {charactersList.map((character, index) => {
        return (
          <CharactersCard
            key={index}
            id={character.id}
            fullName={character.fullName}
            title={character.title}
            family={character.family}
          />
        );
      })}
    </>
  );
};

export default Home;

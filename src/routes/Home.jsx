import axios from "axios";
import React, { useEffect, useState } from "react";
import CharactersCard from "../components/CharactersCard";

const Home = () => {
  const [charactersList, setCharctersList] = useState([]);
  const [onlyStark, setOnlyStark] = useState(false);
  useEffect(() => {
    axios
      .get("https://thronesapi.com/api/v2/Characters")
      .then((res) => setCharctersList(res.data));
  }, []);

  return (
    <>
      <button onClick={() => setOnlyStark(!onlyStark)}>FILTRE STARK</button>
      {charactersList
        .filter((character) =>
          character.family === "House Stark" || character.family === "Stark"
            ? onlyStark
            : !onlyStark
        )
        .map((character, index) => {
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

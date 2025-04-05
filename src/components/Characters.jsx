import React, { useState, useEffect } from "react";
import Card from "./Card";
import hulk from "../images/hulk.svg";
import { getMarvelAuthParams } from "../authMarvel";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchCharacters = async (query = "") => {
    try {
      const { ts, apikey, hash } = getMarvelAuthParams(); // genera auth params dinámicos
      const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&limit=30${
        query ? `&nameStartsWith=${query}` : ""
      }&apikey=${apikey}&hash=${hash}`;

      const response = await fetch(url);
      const json = await response.json();
      setCharacters(json.data.results);
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchCharacters(searchTerm);
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  const validCharacters = characters.filter(
    (char) =>
      char.thumbnail.path !==
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
  );

  return (
    <div className="flex flex-col content-center justify-center bg-slate-900 min-h-screen">
      <div className="text-slate-300 tablet:text-5xl text-4xl py-8 text-center w-screen font-bold flex justify-center gap-x-3">
        <img className="opacity-90 w-8 tablet:w-14" src={hulk} alt="Hulk Icon" />
        <h1 className="flex items-center">Characters</h1>
      </div>

      <div className="w-full flex px-4">
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          name="search"
          placeholder="Search characters..."
          className="text-center rounded bg-slate-700 grow text-gray-200 text-xl tablet:text-2xl px-4 py-2 tablet:py-4"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4 py-8 px-4">
        {validCharacters.map((char) => (
          <Card
            tipo="character"
            key={char.id}
            id={char.id}
            img={`${char.thumbnail.path}.jpg`}
            titulo={char.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Characters;

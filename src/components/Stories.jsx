import React, { useState, useEffect } from "react";
import Card from "./Card";
import estrella from "../images/estrella_blanca.svg";
import { getMarvelAuthParams } from "../authMarvel";

const Stories = () => {
  const [dataMarvel, setDataMarvel] = useState();
  const [busqueda, setBusqueda] = useState("");

  const fetchEvents = async (query = "") => {
    try {
      const { ts, apikey, hash } = getMarvelAuthParams();
      const url = `https://gateway.marvel.com/v1/public/events?ts=${ts}&limit=30${
        query ? `&nameStartsWith=${query}` : ""
      }&apikey=${apikey}&hash=${hash}`;

      const response = await fetch(url);
      const json = await response.json();
      setDataMarvel(json.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents(); // inicial
  }, []);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchEvents(busqueda);
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [busqueda]);

  return (
    <div className="flex flex-col content-center justify-center bg-slate-900">
      <div className="text-slate-300 tablet:text-5xl text-4xl py-8 text-center w-screen font-bold flex justify-center gap-x-3 text-center">
        <img className="opacity-90 w-8 tablet:w-14" src={estrella} alt="Estrella Icon" />
        <h1 className="flex items-center">Events</h1>
      </div>

      <div className="w-full flex tablet:px-4">
        <input
          type="text"
          onChange={(e) => setBusqueda(e.target.value)}
          name="busqueda"
          placeholder="Search events..."
          className="text-center rounded bg-slate-700 grow text-gray-200 text-xl tablet:text-2xl px-2 tablet:py-4"
        />
      </div>

      <div className="flex w-full flex-wrap justify-center content-center gap-2 py-8 rounded">
        {dataMarvel
          ? dataMarvel.results
              .filter(
                (f) =>
                  f.thumbnail.path !==
                  "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
              )
              .map((e) => (
                <Card
                  tipo="events"
                  key={e.id}
                  id={e.id}
                  img={`${e.thumbnail.path}.jpg`}
                  titulo={e.name || e.title}
                />
              ))
          : ""}
      </div>
    </div>
  );
};

export default Stories;

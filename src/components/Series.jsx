import React, { useState, useEffect } from "react";
import Card from "./Card";
import seriesIcon from "../images/series.svg";
import { getMarvelAuthParams } from "../authMarvel";

const Series = () => {
  const [dataMarvel, setDataMarvel] = useState();
  const [busqueda, setBusqueda] = useState("");

  const fetchSeries = async (query = "") => {
    try {
      const { ts, apikey, hash } = getMarvelAuthParams();
      const url = `https://gateway.marvel.com/v1/public/series?ts=${ts}&limit=100${
        query ? `&titleStartsWith=${query}` : ""
      }&apikey=${apikey}&hash=${hash}`;

      const response = await fetch(url);
      const json = await response.json();
      setDataMarvel(json.data);
    } catch (error) {
      console.error("Error fetching series:", error);
    }
  };

  useEffect(() => {
    fetchSeries(); // llamada inicial sin filtro
  }, []);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchSeries(busqueda);
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [busqueda]);

  return (
    <div className="flex flex-col content-center justify-center bg-slate-900">
      <div className="text-slate-300 tablet:text-5xl text-4xl py-8 text-center w-screen font-bold flex justify-center gap-x-3">
        <img className="opacity-90 w-8 tablet:w-14" src={seriesIcon} alt="Series icon" />
        <h1 className="flex items-center">Series</h1>
      </div>

      <div className="w-full flex tablet:px-4">
        <input
          type="text"
          onChange={(e) => setBusqueda(e.target.value)}
          value={busqueda}
          name="busqueda"
          placeholder="Search series..."
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
                  tipo="serie"
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

export default Series;

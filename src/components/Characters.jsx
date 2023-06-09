import React, { useState, useEffect } from "react";
import Card from "./Card";
import hulk from "../images/hulk.svg";
const Characters = () => {
  const [dataMarvel, setDataMarvel] = useState();
  const [busqueda, setBusqueda] = useState();
  useEffect(() => {
    fetch(
      "https://gateway.marvel.com/v1/public/characters?nameStartsWith=" +
        busqueda +
        "&ts=1&limit=30&apikey=" +
        import.meta.env.VITE_PUBLIC_MARVEL +
        "&hash=" +
        import.meta.env.VITE_HASH
    )
      .then((e) => e.json())
      .then((f) => setDataMarvel(f.data));
  }, [busqueda]);
  useEffect(() => {
    fetch(
      "https://gateway.marvel.com/v1/public/characters?ts=1&limit=30&apikey=" +
        import.meta.env.VITE_PUBLIC_MARVEL +
        "&hash=" +
        import.meta.env.VITE_HASH
    )
      .then((e) => e.json())
      .then((f) => setDataMarvel(f.data));
  }, []);

  return (
    <div className="flex flex-col content-center justify-center bg-slate-900 ">
      <div
        className="text-slate-300 tablet:text-5xl text-4xl py-8 text-center w-screen font-bold   
             flex  justify-center gap-x-3 text center "
      >
        <img className="  opacity-90  w-8 tablet:w-14 " src={hulk}></img>

        <h1 className="flex items-center">Character´s</h1>
      </div>
      <div className="w-full  flex  tablet:px-4 ">
        <input
          type="text "
          onChange={(e) => setBusqueda(e.target.value)}
          name="busqueda"
          className="text-center rounded bg-slate-700  grow text-gray-200 text-xl tablet:text-2xl px-2 tablet:py-4"
        />
      </div>
      <div className="flex w-full  flex-wrap  justify-center content-center gap-2 py-8 rounded ">
        {dataMarvel
          ? dataMarvel.results
              .filter(
                (f) =>
                  f.thumbnail.path !=
                  "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
              )
              .map((e) => {
                return (
                  <Card
                    tipo={"character"}
                    id={e.id}
                    key={e.id}
                    img={e.thumbnail.path + ".jpg"}
                    titulo={e.name}
                  ></Card>
                );
              })
          : ""}
        {/* {console.log(dataMarvel ? dataMarvel : "")} */}
      </div>
    </div>
  );
};

export default Characters;

import React, { useEffect, useState } from "react";
import md5 from "md5";
import Card from "./Card.jsx";
import comics from "../images/comic.svg";

function Comics() {
  const [dataMarvel, setDataMarvel] = useState();
  const [busqueda, setBusqueda] = useState("");

  const publicKey = import.meta.env.VITE_PUBLIC_MARVEL;
  const privateKey = import.meta.env.VITE_PRIVATE_MARVEL;

  console.log("Public Key:", publicKey);
  console.log("Private Key:", privateKey);


  // Función para construir la URL con hash dinámico
  const getMarvelUrl = (title = "") => {
    const ts = Date.now().toString();
    const hash = md5(ts + privateKey + publicKey);
    const base = `https://gateway.marvel.com/v1/public/comics?ts=${ts}&limit=30&apikey=${publicKey}&hash=${hash}`;
    return title ? `${base}&titleStartsWith=${title}` : base;
  };

  console.log(getMarvelUrl(busqueda));


  // Petición inicial (todos los comics)
  useEffect(() => {
    fetch(getMarvelUrl())
      .then((res) => res.json())
      .then((json) => setDataMarvel(json.data))
      .catch((err) => console.error("Error inicial:", err));
  }, []);

  // Petición cuando se busca algo
  useEffect(() => {
    if (busqueda.length < 1) return; // evita petición vacía
    fetch(getMarvelUrl(busqueda))
      .then((res) => res.json())
      .then((json) => setDataMarvel(json.data))
      .catch((err) => console.error("Error en búsqueda:", err));
  }, [busqueda]);

  return (
    <div className="flex flex-col content-center justify-center bg-slate-900 ">
      <div className="text-slate-300 text-4xl py-8 text-center w-screen font-bold flex justify-center gap-x-3 tablet:text-5xl">
        <img className="opacity-90 w-8 tablet:w-14" src={comics} alt="logo" />
        <h1 className="flex items-center">Comics</h1>
      </div>

      <div className="flex gap-6 text-white w-screen justify-center">
        <div className="w-full flex tablet:px-4">
          <input
            type="text"
            onChange={(e) => setBusqueda(e.target.value)}
            name="busqueda"
            placeholder="Busca un cómic"
            className="text-center rounded bg-slate-700 grow text-gray-200 text-xl tablet:text-2xl px-2 tablet:py-4"
          />
        </div>
      </div>

      <div className="flex w-full flex-wrap justify-center content-center gap-2 py-8 rounded">
        {dataMarvel &&
          dataMarvel.results
            .filter(
              (f) =>
                f.thumbnail.path !==
                "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
            )
            .map((e) => (
              <Card
                key={e.id}
                tipo={"comics"}
                id={e.id}
                img={e.thumbnail.path + ".jpg"}
                titulo={e.name ? e.name : e.title}
              />
            ))}
        {console.log(dataMarvel ? dataMarvel : "")}
      </div>
    </div>
  );
}

export default Comics;

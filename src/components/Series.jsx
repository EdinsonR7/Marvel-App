import React,{useState,useEffect} from 'react'
import Card from './Card';
import series from "../images/series.svg"
const Series = () => {
    const [dataMarvel, setDataMarvel] = useState();
    const [busqueda, setBusqueda] = useState();
  useEffect(() => {
    fetch(
      "https://gateway.marvel.com/v1/public/series?titleStartsWith=" +
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
        "https://gateway.marvel.com/v1/public/series?ts=1&limit=100&apikey=" +
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
        <img
              className="  opacity-90  w-8 tablet:w-14 "
              src={series}
            ></img>

        <h1 className='flex items-center'>Series</h1>
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
                    <Card   tipo={"serie"} key={e.id} id={e.id} img={e.thumbnail.path + ".jpg"} titulo={e.name?e.name:e.title}></Card>
                  );
                })
            : ""}
          {console.log(dataMarvel ? dataMarvel : "")}
        </div>
      </div>
    );
}

export default Series
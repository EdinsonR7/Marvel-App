import React,{useState,useEffect} from 'react'

const ContainerCards = ({busqueda}) => {
    const [dataMarvel, setDataMarvel] = useState();
    useEffect(() => {
      fetch(
        "https://gateway.marvel.com/v1/public/"+busqueda+"?ts=1&limit=100&apikey=" +
          import.meta.env.VITE_PUBLIC_MARVEL +
          "&hash=" +
          import.meta.env.VITE_HASH
      )
        .then((e) => e.json())
        .then((f) => setDataMarvel(f.data));
    }, []);
  
    return (
      <div className="flex content-center justify-center bg-slate-900 ">
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
                    <Card img={e.thumbnail.path + ".jpg"} titulo={e.name?e.name:e.title}></Card>
                  );
                })
            : ""}
          {/* {console.log(dataMarvel ? dataMarvel.results : "")} */}
        </div>
      </div>
    );
}

export default ContainerCards
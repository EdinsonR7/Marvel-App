import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import img1 from "../images/comic.svg";
import img2 from "../images/comics3.svg";
import img3 from "../images/home.svg";
import CarouselModel from "./CarouselModel";
import carouselResponsive from "./CarouselResponsive";
import CarouselResponsive from "./CarouselResponsive";

const CharacterId = () => {
  let { id } = useParams();
  const [dataMarvel, setDataMarvel] = useState();
  const [dmCha, setDmCha] = useState();
  const [dmCharacter, setDmCharacter] = useState();
  const [dmEvents, setDmEvents] = useState();
  let ancho = visualViewport;
  let percentaje = ancho < 385 ? 100 : 30;
  const apiConsumo = ({ url, data, info }) => {
    fetch(
      "https://gateway.marvel.com/v1/public/characters/" +
        id +
        url +
        "?ts=1&limit=30&apikey=" +
        import.meta.env.VITE_PUBLIC_MARVEL +
        "&hash=" +
        import.meta.env.VITE_HASH
    )
      .then((e) => e.json())
      .then((f) => f.data)
      .then((g) => data(info ? g : g.results[0]));
  };
  useEffect(() => {
    apiConsumo({ url: "", data: setDataMarvel });
    apiConsumo({ url: "/series", data: setDmCha, info: "a" });
    apiConsumo({ url: "/comics", data: setDmCharacter, info: "a" });
  }, []);

  const navigate = useNavigate();
  return (
    <div className="flex justify-start px-2 laptop:px-20">
      {console.log("---stories----")}
      {console.log(dataMarvel)}
      <div className=" flex mt-7 justify-start flex-wrap  tablet:flex-row w-full  rounded-xl overflow-hidden pb-8 mb-8">
        {console.log(dmCharacter ? dmCharacter : "")}
        <div className=" rounded-xl  flex-col w-full  flex items-center tabletxl:block overflow-hidden pb-4 ">
          <img
            hspace="8"
            vspace="8"
            className="flex tabletxl:float-left rounded-xl tablet:mr-4 phonexl:max-w-[400px]  tablet:w-auto   "
            src={dataMarvel ? dataMarvel.thumbnail.path + ".jpg" : ""}
          ></img>{" "}
          <div>
            <h1 className="text-center font-bold p-0 m-0  text-slate-200 py-2 text-2xl">
              {dataMarvel ? dataMarvel.name : "" }
              <br />{/* 
              {dataMarvel ? dataMarvel.title.slice(28, 50) : ""}
              {dataMarvel ? (dataMarvel.title[50] ? "..." : "") : ""} */}
            </h1>
            <h2 className="align-bottom text-left font-semibold p-0 m-0  text-slate-200 py-2  whitespace-pre-wrap ">
              {dataMarvel ? dataMarvel.description : ""}
              <h2 className="text-center">
                {dataMarvel
                  ? dataMarvel.description == null
                    ? "Description no available"
                    : ""
                  : ""}
              </h2>
            </h2>
           
          </div>
         
        </div>
        ;
        <div className="flex justify-start flex-col  w-full">
          <div className="py-4">
            <CarouselResponsive data={dmCha} titulo="Series" />
          </div>
          <div className="py-4">
            <CarouselResponsive data={dmCharacter} titulo="Comics" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterId;

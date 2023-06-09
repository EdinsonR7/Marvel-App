import React from "react";
import { useNavigate } from "react-router-dom";
import marvel from "./images/marvel_logo_500.png";
import hulklogo from "./images/hulk.svg";
import populars from "./images/estrella_blanca.svg";
import series from "./images/series.svg";
import comics from "./images/comic.svg";
import home from "./images/home.svg";
import lupa from "./images/lupa.svg";
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row w-full   tablet:h-18 text-center ">
      <ol className="  bg-gradient-to-r from-slate-800 via-red-800 to-slate-900 flex flex-wrap justify-start gap-x-8 w-full          border-b-4 border-red-900 ">
        <li className="w-screen tablet:w-max flex justify-center ">
          <img src={marvel} className="h-12 m-0 p-0 ml-2   tablet:ml-6 "></img>
        </li>
        <div className="flex gap-x-8 pl-4 w-screen justify-center tablet:justify-start tablet:w-max ">
          <li
            onClick={() => navigate("/comics")}
            className="text-slate-200 font-bold hover:text-slate-50  
            cursor-pointer flex  items-center"
          >
            <img
              className="  opacity-90    h-10 pb-1 hover:border-b-2 hover:border-b-red-500 laptop:pb-1 laptop:hover:border-0 laptop:h-8 laptop:pt-1"
              src={comics}
            ></img>

            <h1 className=" text-center hidden laptop:flex hover:border-b-2 hover:border-b-red-500 ">
              {" "}
              COMICS
            </h1>
          </li>
          <li
            onClick={() => navigate("/series")}
            className="text-slate-200 font-bold hover:text-slate-50  
          cursor-pointer flex  items-center"
          >
            <img
              className="  opacity-90    h-10 pb-1 hover:border-b-2 hover:border-b-red-500 laptop:pb-1 laptop:hover:border-0 laptop:h-8 laptop:pt-1"
              src={series}
            ></img>
            <h1 className="hidden laptop:flex hover:border-b-2 hover:border-b-red-500 ">
              {" "}
              SERIES
            </h1>
          </li>
          <li
            onClick={() => navigate("/characters")}
            className="text-slate-200 font-bold hover:text-slate-50  
          cursor-pointer flex  items-center"
          >
            <img
              className=" opacity-90    h-10 pb-2 hover:border-b-2 hover:border-b-red-500 laptop:pb-1 laptop:hover:border-0 laptop:h-8 laptop:pt-1"
              src={hulklogo}
            ></img>
            <h1 className="hidden hover:border-b-2 hover:border-b-red-500 laptop:flex">
              {" "}
              CHARACTERS
            </h1>
          </li>
          <li
            onClick={() => navigate("/popular")}
            className="text-slate-200 font-bold hover:text-slate-50  
            cursor-pointer flex  items-center "
          >
            <img
              className=" opacity-90    h-10 pb-2 hover:border-b-2 hover:border-b-red-500 laptop:pb-1 laptop:hover:border-0 laptop:h-8 laptop:pt-1"
              src={populars}
            ></img>
            <h1 className=" hidden laptop:flex hover:border-b-2 hover:border-b-red-500 ">
              {" "}
              EVENTS
            </h1>
          </li>
        </div>
      </ol>
    </div>
  );
};

export default NavBar;

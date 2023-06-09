import CarouselModel from "./CarouselModel.jsx";
import React from "react";
const CarouselResponsive = ({ titulo, data }) => {
  return (
    <div>
      <div className="flex w-full pb-5">
        <h1 className="  pl-4 text-xl tablet:text-2xl tablet:pl-12  text-left text-slate-200 font-bold">
          {data
            ? data.results.length >= 1
              ? titulo
              : titulo + " Not Available "
            : ""}
        </h1>
        {/* {console.log("data" + titulo)}
          {console.log(data.results.length>=1)} */}
      </div>
      <div id="movil" className="  phonexl:hidden">
        <CarouselModel dmCha={data} porcentajeItems={100}></CarouselModel>
      </div>
      <div id="movilxl" className="hidden phonexl:flex  tablet:hidden ">
        <CarouselModel dmCha={data} porcentajeItems={70}></CarouselModel>
      </div>
      <div id="tablet" className=" hidden tablet:flex tabletxl:hidden">
        <CarouselModel dmCha={data} porcentajeItems={40}></CarouselModel>
      </div>
      <div id="tabletx" className=" hidden tabletxl:flex laptop:hidden">
        <CarouselModel dmCha={data} porcentajeItems={35}></CarouselModel>
      </div>
      <div id="laptop" className=" hidden laptop:flex ">
        <CarouselModel dmCha={data} porcentajeItems={30}></CarouselModel>
      </div>
    </div>
  );
};
export default CarouselResponsive;

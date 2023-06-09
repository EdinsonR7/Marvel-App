import React from "react";
import { useNavigate } from "react-router-dom";
function Card({id, img, titulo,tipo }) {
  const navigate =useNavigate()
  return (
    <div onClick={()=>navigate("/"+tipo+"/"+id)} className=" cursor-pointer flex   flex-wrap flex-col border-4 border-red-900 rounded-xl overflow-hidden hover:border-red-300  ">
      <div className="rounded-xl w-auto max-h-[480px] tablet:h-[360px]  tablet:w-full  items-end flex flex-wrap   overflow-hidden">
        <img 
          className=" rounded-xl w- max-h-[32rem] tablet:w-60  tablet:h-[370px] hover:scale-125 transition-all duration-1000"
          src={img}
        ></img>
       
        <div className="  overflow-hidden absolute rounded-tr-md rounded-br-none flex opacity-90  flex-col  rounded-b-xl px-2 object-cover tablet:rounded-b-xl tablet:w-60 bg-gray-900 bg-cover">
          <h1 className="text-center font-semibold text-md p-0 m-0  text-slate-200 py-2 ">
            {titulo.slice(0, 28)}
            <br />
            {titulo.slice(28, 50)}{titulo[50]?"...":""}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Card;

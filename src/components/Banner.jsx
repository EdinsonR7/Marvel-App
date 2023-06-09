import React from "react";
import bannerprincipal from "../images/banner.webp"
const Banner = () => {
  return (
    <div className="flex overflow-hidden w-full h-56  tablet:w-auto tablet:h-80 laptop:h-96  content-center justify-center items-center">
      <img className="  h-96 object-cover   tablet:w-full "src={bannerprincipal} alt="banner" />
      <h1></h1>
    </div>
  );
};

export default Banner;

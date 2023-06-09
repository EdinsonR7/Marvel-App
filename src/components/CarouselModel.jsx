import { Carousel } from "react-responsive-carousel";
/*import Carousel from "react-multi-carousel";*/
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-multi-carousel/lib/styles.css";
const CarouselModel=({porcentajeItems, dmCha})=>{
    return <div className=" "  >
    <Carousel   centerSlidePercentage={porcentajeItems}  centerMode={true}    showThumbs={false} showArrows={true}> 
     
         {dmCha
           ? dmCha.results
               .filter(
                 (f) =>
                   f.thumbnail.path !=
                   "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
               )
               .map((e) => {
                 return (
                    <div className="  h-72   tablet:px-2 overflow-hidden">

                   <img
                     className="aspect-square  h-72"
                     src={e.thumbnail.path + ".jpg"}
                     ></img>
                     </div>
                 );
               })
           : ""}
       </Carousel>
     </div>
  }
  export default CarouselModel;
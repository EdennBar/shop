
import { useState } from "react";
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
import './index.css';



const slideImage=[{
    image:'images/airJordan1.jpg'},
    {image:'images/Dunkhigh.jpg'}
,{image:'images/DunkLow.jpg'}
,{image:'images/DunkSB.jpg'}
,{image:'images/nikexoffWhite.jpg'},
{image:'images/sacai.jpg'}]



const Gallery = () => {
    
const [current,setCurrent]=useState(0)
const length=slideImage.length
if(!Array.isArray(slideImage) || slideImage.length<=0){
    return null;
}
function prevSlide() {
    setCurrent(current=== 0? length-1:current-1)
  }
  function nextSlide() {
    setCurrent(current===length-1 ? 0: current +1)
}

    return (
   <section className="slider">
       <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}></FaArrowAltCircleLeft> 
       <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}></FaArrowAltCircleRight> 
    {slideImage.map((slide,index)=>{
        return(
           <div className={index===current ?'slide active' : 'slide'} key={index}>
                {index===current && (<img src={slide.image} alt="travel image" className="image"/>)}
           </div>
        )
    })}
   </section>
    
    );
}

export default Gallery;
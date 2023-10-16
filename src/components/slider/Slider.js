import React, { useEffect, useState } from 'react'
import styles from './Slider.module.scss'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import { sliderData } from './slider-data'
import { useNavigate } from 'react-router-dom'



const Slider = () => {
 
 const [currentSlide, setCurrentSlide] = useState(0);
 const navigate = useNavigate();
 const slideLength = sliderData.length;
 const autoScroll = true;
 let slideInterval;
 const intervalTime = 5000;

 const prevSlide = ()=>{
  setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
 }

 const nextSlide = ()=>{
  setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
 }

 useEffect(() => {
   setCurrentSlide(0);
 }, [])

 useEffect(() => {
   if(autoScroll){
    const autoSlide = ()=> {
      slideInterval = setInterval(nextSlide, intervalTime);
    } 
    autoSlide();
   }
   return () => clearInterval(slideInterval)
 }, [currentSlide, intervalTime, autoScroll])
 

  return (
    <div className={styles.slider}>
      <AiOutlineArrowLeft  className={`${styles.arrow} ${styles.prev}`} onClick={prevSlide}/>
      <AiOutlineArrowRight  className={`${styles.arrow} ${styles.next}`} onClick={nextSlide}/>

      {sliderData.map((slide, index)=>{
       const {image, heading, desc} = slide
       return(
        <div key={index} className={index === currentSlide ? `${styles.slide} ${styles.current}` : `${styles.slide}` }>
         {index === currentSlide && (
          <>
           <img src={image} alt=''></img>
           <div className={styles.content}>
            <span className={styles.span1}></span>
            <span className={styles.span2}></span>
            <span className={styles.span3}></span>
            <span className={styles.span4}></span>
            <h2>{heading}</h2>
            <p>{desc}</p>
            <button className="--btn --btn-primary" onClick={() => navigate('/shop')}>Shop Now</button>
            <hr/>

           </div>
          </>
         )}
        </div>
       )
      })}
    </div>
  )
}

export default Slider

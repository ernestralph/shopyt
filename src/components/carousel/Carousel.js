import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from './data';

const ProductCarousel = ({products}) => {
  return (
    <div>
      <Carousel 
        showDots={false}
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        customTransition='all 500ms ease'
        autoPlaySpeed={3000}
        transitionDuration={1000}
      >
       {products}
      </Carousel>
    </div>
  )
}

export default ProductCarousel

import React from 'react'
import "./Carousel.scss"
import { Link } from 'react-router-dom'
import { shortenText } from '../../utils/helperFunctions'

const CarouselItem = ({imgUrl, name, price, description}) => {
  return (
    <div className='carouselItem'>
      <Link to="/product-details">
       <img className='product--image' src={imgUrl} alt={name} />
       <p className='price'>
         {`$${price}`}
       </p>
       <h4>{shortenText(name, 18)}</h4>
       <p className='--mb'>{shortenText(description, 26)}</p>
       <button className='--btn --btn-primary --btn-block'>Add To Cart</button>
      </Link>
    </div>
  )
}

export default CarouselItem

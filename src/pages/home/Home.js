import React from 'react'
import Slider from '../../components/slider/Slider'
import styles from '../../components/homeInfoBox/HomeInfoBox.module.scss'
import HomeInfoBox from '../../components/homeInfoBox/HomeInfoBox'

const SectionHeadings = ({heading, btnText})=>{
 return(
  <>
   <div className='--flex-between'>
    <h2 className='--fw-thin'>{heading}</h2>
    <button className='--btn'>{btnText}</button>
   </div>
   <div className='--hr'></div>
  </>
 )
}

const Home = () => {
  return (
    <>
      <Slider />
      <section className={'container'}>
       <HomeInfoBox />
       <SectionHeadings heading={"Latest Product"} btnText={"Shop Now>>>"}/>
      </section>
    </>
  )
}

export default Home


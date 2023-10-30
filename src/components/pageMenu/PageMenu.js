import React from 'react'
import  './PageMenu.scss'
import { NavLink } from 'react-router-dom'

const PageMenu = () => {
  return (
    <div>
      <nav className='--bg-primary --p --mb'>
       <ol className='home-links'>
        <NavLink to={'/profile'}>Profile</NavLink>
        <NavLink to={'/wallet'}>My Wallet</NavLink>
        <NavLink to={'/wishlist'}>WishList</NavLink>
       </ol>
      </nav>
    </div>
  )
}

export default PageMenu

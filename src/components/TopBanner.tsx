import React from 'react'
import '../styles/TopBanner.css'
import CategoryNavBar from './CategoryNavBar'
import { Link } from 'react-router-dom'

export function TopBanner({ imageUrl }: { imageUrl: string }) {

  return (
    <Link to="/">
      <div className='banner-container'>
        <div className='banner-image'>
          <img className='image' src={imageUrl} />
        </div>
        <div className='search-bar'>
          <h1>search bar</h1>

        </div>
        <div className='nav-bar'>
          <CategoryNavBar />
        </div>
      </div>
    </Link>
  )

}

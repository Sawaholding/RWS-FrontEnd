import React from 'react'
import '../styles/TopBanner.css'
import CategoryNavBar from './CategoryNavBar'



export function TopBanner() {
  return (
    <>
      <div className='banner-container'>
        <div className='shopbanner'>

        </div>
        <div className='search-bar'>

        </div>
        <div className='nav-bar'>
          <CategoryNavBar />
        </div>
      </div>
    </>
  )
}

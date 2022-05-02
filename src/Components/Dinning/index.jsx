import React from 'react'

//Components
import DinningCarousel from './dinningCarousel'
import RestaurantCard from '../Delivery/restaurantCard'


const Dinning = () => {
  return (
      <>
        <div>
          <DinningCarousel />          
          <div className="flex flex-wrap gap mt-8">
            <RestaurantCard />  
          </div> 
        </div>
      </>
  )
}

export default Dinning
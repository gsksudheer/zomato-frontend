import React from 'react';

//Components
import DeliveryCarousel from './delivery.Carousel';
import Brand from './brand';
import RestaurantCard from './restaurantCard';
import Filters from '../filters';

const Delivery = () => {
  return (
    <>
      <Filters />       
        <div className="bg-gray-100 py-5">   
          <DeliveryCarousel />
        </div>
          <Brand />
        <div className="flex flex-wrap gap">
          <RestaurantCard />
        </div> 
    </>
  )
}

export default Delivery;
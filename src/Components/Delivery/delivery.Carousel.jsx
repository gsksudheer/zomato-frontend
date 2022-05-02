import React from 'react'
import Slider from 'react-slick';

//Components
import DeliveryCategory from './delivery.Category';
import { SlickArrowLeft, SlickArrowRight } from '../Arrows';

const DeliveryCarousel = () => {
  var images = [
    {
        image: "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
        title: "Biryani",
    },
    {
        image:  "https://b.zmtcdn.com/data/homepage_dish_data/4/742929dcb631403d7c1c1efad2ca2700.png",
        title: "Chicken",
    },
    {
        image:  "https://b.zmtcdn.com/data/homepage_dish_data/4/51ddb8a2227b36f36b74c4ea3c26823a.png",
        title: "Chaptai",
    },
    {
        image: "https://b.zmtcdn.com/data/homepage_dish_data/4/6e69685d22c94ffd42ccd7e70e246bd9.png",
        title: "Burger",
    },
    {
        image: "https://b.zmtcdn.com/data/homepage_dish_data/4/04e1dbc0ec30031e5f26d0bef922ea0c.png",
        title: "Chaat",
    },
    {
        image:  "https://b.zmtcdn.com/data/dish_images/914402aa1bbe153d735c51a3ba4fe61b1629132873.png",
        title: "Kersari Bath",
    },
  ]  

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SlickArrowRight/>,
    prevArrow: <SlickArrowLeft />,
  };
  return (
    <div className="lg:my-12 lg:mt-10 mt-16">      
      <h1 className="mb-6 ml-4 text-2xl md:text-4xl font-semibold text-gray-800">Inspiration for your first order</h1>
      {/* Mobile */}
      <div className="flex flex-wrap items-center gap-3 md:gap-5 lg:hidden ml-4 md:ml-8">
        {
          images.map((items) => ( 
            <DeliveryCategory {...items} />
          ))
        }
      </div>
      {/* Pc */}
      <div className="hidden lg:block my-8">
        <Slider {...settings}>
          {
            images.map((items) => (        
              <DeliveryCategory {...items} />
            ))
          }      
        </Slider>
      </div>      
    </div>
  )
}

export default DeliveryCarousel;
import React from 'react'
import Slider from 'react-slick';

//Components
import PicutreCard from '../pictureCard';
import { SlickArrowLeft, SlickArrowRight } from '../Arrows';


const NighLifeCarousel = () => {
  const settings = {
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SlickArrowRight/>,
      prevArrow: <SlickArrowLeft />,
    };
  const dinning = [
      {
          image: "https://b.zmtcdn.com/data/collections/df4ccbf9f6b6db21b07d12a18577b5af_1582106658.jpg",
          description: "Microbreweries",
          places: 30,
      },
      {
          image: "https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
          description: "Best Bars & Pubs",
          places: 28,
      },
      {
        image: "https://b.zmtcdn.com/data/collections/df4ccbf9f6b6db21b07d12a18577b5af_1582106658.jpg",
        description: "Microbreweries",
        places: 30,
    },
    {
        image: "https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
        description: "Best Bars & Pubs",
        places: 28,
    },
    {
      image: "https://b.zmtcdn.com/data/collections/df4ccbf9f6b6db21b07d12a18577b5af_1582106658.jpg",
      description: "Microbreweries",
      places: 30,
  },
  {
      image: "https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
      description: "Best Bars & Pubs",
      places: 28,
  },
      
  ]

return (
  <>
      <div className="flex flex-col gap-3 mt-6">
          <div>
              <h1 className="text-4xl font-semibold mb-8">Collections</h1>
              <h3 className="text-lg text-gray-300">Explore curated lists of top restaurants, cafes, pubs, and bars in Bengaluru, based on trends</h3>
          </div>
          <Slider {...settings}>
              {
                  dinning.map((items) => (
                      <PicutreCard {...items} />
                  ))
              }
          </Slider>
      </div>
  </>
)
}
const NightLife = () => {
  return (
    <div>
      <NighLifeCarousel />
    </div>
  )
}

export default NightLife;
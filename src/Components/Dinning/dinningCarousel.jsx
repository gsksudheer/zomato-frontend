import React from 'react';

import Slider from 'react-slick';

//Components
import PicutreCard from '../pictureCard';
import { SlickArrowLeft, SlickArrowRight } from '../Arrows';

const DinningCarousel = () => {
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
            image: "https://b.zmtcdn.com/data/collections/4517a0636184af6e21b827b3ae6f0388_1484644527.jpg?output-format=webp",
            description: "Valentine's Special",
            places: 30,
        },
        {
            image: "https://b.zmtcdn.com/data/collections/d7e3f1d03609fdd6672872662fa5bcf7_1637735165.png?output-format=webp",
            description: "Trending This Week",
            places: 28,
        },
        {
            image: "https://b.zmtcdn.com/data/collections/53be5a745e959a8f6c51c52dd3d9edd1_1536825795.jpg?output-format=webp",
            description: "Best of Bengaluru",
            places: 12,
        },
        {
            image: "https://b.zmtcdn.com/data/collections/b22194cb38ed18a5200b387ad8f243f0_1582015789.jpg?output-format=webp",
            description: "Newely Opened",
            places: 24,
        },
        {
            image: "https://b.zmtcdn.com/data/collections/4b37078f7b206f169f7ffa42edf28637_1633437303.jpg?output-format=webp",
                    
            description: "Love For Pizza",
            places: 42,
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

export default DinningCarousel
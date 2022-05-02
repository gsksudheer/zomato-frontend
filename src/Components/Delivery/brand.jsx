import React from 'react';
import Slider from 'react-slick';

//components
import LeftArrow from "../assets/left-arrow.svg";
import RightArrow from "../assets/right-arrow.svg";


const Brand = () => {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src={LeftArrow} alt="PrevArrow" {...props} />
    );
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src={RightArrow} alt="PrevArrow" {...props} />
    );
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <SlickArrowRight/>,
        prevArrow: <SlickArrowLeft />,
    };
    
    const logos = [
        {
            logo: "https://b.zmtcdn.com/data/brand_creatives/logos/ec72c289aa01d947fe15a009ce8e559f_1616052816.png?output-format=webp",
            name: "Meghana Foods"
        },
        {
            logo: "https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png?output-format=webp",
            name: "McDonald's",
        },
        {
            logo: "https://b.zmtcdn.com/data/brand_creatives/logos/526e7511008f07f7d630549c7c5809b1_1638685733.png?output-format=webp",
            name: "Leon Grill",
        },
        {
            logo: "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png?output-format=webp",
            name: "KFC",
        },
        {
            logo: "https://b.zmtcdn.com/data/brand_creatives/logos/5ef673b417cd25b5a04176ce341d425a_1630505477.png?output-format=webp",
            name: "A2B - Adyar Ananda Bhavan",
        },
        {
            logo: "https://b.zmtcdn.com/data/brand_creatives/logos/878a69aaa88728f7073d1e3d13a5a047_1628324346.png?output-format=webp",
            name: "FreshMenu",
        },
        {
            logo: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp",
            name: "Burger King"
        }
    ]
  return (
      <>
        <div className="hidden lg:block my-5 mb-40">
            <h1 className="text-4xl font-semibold text-gray-800 my-8">Top brands for you</h1>
            <Slider {...settings}>
                {logos.map((item) => (
                    <div className="mt-3">
                        <div className="w-40 h-40 p-2 rounded-full border-2 shadow">
                            <img src={item.logo} alt="" className="w-full h-full object-cover rounded-full"/>
                        </div>
                        <h3>{item.name}</h3>
                    </div>
                ))
                }
            </Slider>
        </div>
      </>
    )
}

export default Brand
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactStars from 'react-stars';
import Slider from 'react-slick';
import { AiOutlineCaretRight } from 'react-icons/ai';


//Components
import MenuCollection from '../../Components/Restaurant/MenuCollection';
import MenuSimilarRestaurantCard from '../../Components/Restaurant/MenuSimilarRestaurantCard';
import { SlickArrowLeft, SlickArrowRight } from '../../Components/Arrows';
import ReviewCard from '../../Components/Restaurant/Reviews/ReviewCard';
import MapComponent from '../../Components/Restaurant/MapComponent';


const Overview = () => {
    const { id } = useParams();
    const Cuisines = [ "Pizza", "Fast", "FoodDesserts", "Beverages",]

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SlickArrowRight />,
        prevArrow: <SlickArrowLeft />,
    }
    const ratingChanged = (newRating) => {
        console.log(newRating)
      }
       

  return (
    <>
    <div className="flex flex-col md:flex-row mb-10 mt-5">
        <div className="w-full md:w-8/12">
            <h3 className="text-lg md:text-2xl font-bold">About this place</h3>
            <div className="pt-4">
                <div className="flex items-center justify-between">
                    <h4 className="text-lg md:text-xl font-semibold">Menu</h4>
                    <Link to={`/restaurant/${id}/menu`}>
                        <span className="flex items-center justify-center gap-1 text-red-400">
                            <h5 className="text-md">See all menus</h5>
                            <AiOutlineCaretRight />
                        </span>
                    </Link>
                </div>
                <div>
                    <MenuCollection 
                    image={["https://b.zmtcdn.com/data/menus/382/50382/598077ec2bc2e6829b2c9df65e00e73e.jpg", "https://b.zmtcdn.com/data/menus/382/50382/598077ec2bc2e6829b2c9df65e00e73e.jpg", "https://b.zmtcdn.com/data/menus/382/50382/4426b31cbc97e6a321fbe199ff0bf2ee.jpg"]}
                    title="Items"
                    pages="3"
                    />
                </div>
            </div>
            <div className="md:hidden w-full">
                <MapComponent 
                    phno={9191922293}
                    mapLocation = {[51.505, -0.09]}
                    title = {'banglore'}
                    address = {'30, Frist Floor, Opposite Guzzlers Inn Rest House Road, MG Road, Bangalore'}
                    />
            </div>
            <div className="mt-5">
                <h3 className="text-xl font-semibold">Cuisines</h3>
                <span className="flex items-center gap-3 md:gap-10 mt-3">
                    {Cuisines.map((cusine) => (
                        <h4 className="text-md font-medium text-blue-400 border border-gray-300 rounded-3xl px-2 py-1">{cusine}</h4>
                    ))}
                </span>
            </div>
            <div className="my-4">
                <h2 className="tex-lg md:text-2xl mb-2">Average Cost</h2>
                <h5>₹500 for one order (approx.)</h5>
                <small className="text-gray-400">Exclusive of applicable taxes and charges, if any</small>
            </div>
            <div className="my-4">
                <h2 className="text-lg md:text-2xl mb-2">Similar Restaurants</h2>
               <div className="my-4 z-0 hidden md:block">
                    <Slider {...settings}>
                        <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/chains/0/50270/a5f8fec039374892bb9f938471321993_featured_v2.jpg?output-format=webp" title="Chung Wah" />
                        <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/chains/0/50270/a5f8fec039374892bb9f938471321993_featured_v2.jpg?output-format=webp" title="Chung Wah" />
                        <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/chains/0/50270/a5f8fec039374892bb9f938471321993_featured_v2.jpg?output-format=webp" title="Chung Wah" />
                        <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/chains/0/50270/a5f8fec039374892bb9f938471321993_featured_v2.jpg?output-format=webp" title="Chung Wah" />
                        <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/chains/0/50270/a5f8fec039374892bb9f938471321993_featured_v2.jpg?output-format=webp" title="Chung Wah" />
                    </Slider>
                </div>
            </div>
            <div >
                <h3 className="text-lg md:text-xl font-semibold mb-4">Rate your experience for</h3>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={30}
                    activeColor="#ffd700"
                />                
            </div>
            <div className='mt-5'>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">Review Highlights</h3>
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </div>
        </div>
        <aside style={{height:"fit-content"}} className="hidden md:block w-4/12 h-20 bg-white shadow-xl border rounded-lg mx-4">
            <MapComponent 
                phno={9191922293}
                mapLocation = {[51.505, -0.09]}
                title = {'banglore'}
                address = {'30, Frist Floor, Opposite Guzzlers Inn Rest House Road, MG Road, Bangalore'}
                />
        </aside>
    </div>
    </>
  )
}
export default Overview;
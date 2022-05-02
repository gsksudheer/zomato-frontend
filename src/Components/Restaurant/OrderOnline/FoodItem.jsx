import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { AiOutlinePlus } from 'react-icons/ai';
const FoodItem = () => {
  return (
      <>
        <div className="flex items-start gap-2 md:gap-6 px-2">
            <div className="w-24 h-24 md:w-42 md:h-42">
                <img src="https://b.zmtcdn.com/data/dish_photos/410/06c9dcc4f29d4c1ef77171844560a410.jpg?fit=around|130:130&crop=130:130;*,*" 
                    alt="image"
                    className="w-full h-full rounded-lg"
                 />
            </div>
            <div className="w-3/4 md:w-7/12 flex flex-col md:gap-1">
                <h3 className="text-md md:text-lg font-semibold">Garlic Breadsticks</h3>
                <span className="flex items-center gap-2 font-gray-300"><ReactStars count={5} size={24} value={3}/> 10 votes</span>
                <h4 className="text-sm md:text-md font-medium text-gray-400">₹99</h4>
                <p className="md:block w-36 md:w-full text-sm md:text-md truncate">Baked to perfection. Your perfect pizza partner! Tastes best with dip</p>
            </div>
            <div>
                <button className="bg-red-100 border border-red-500 text-sm text-red-500 font-semibold rounded-lg flex itens-start gap-2 px-2 md:px-3 py-1">
                    ADD <AiOutlinePlus />
                </button>
            </div>
        </div>
      </>
  )
}

export default FoodItem
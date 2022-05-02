import React from 'react';
import { GoStar } from 'react-icons/go';

const RestaurantInfo = () => {
  return (
    <>
        <div className="flex flex-col-reverse gap-2 md:flex-row items-start justify-between w-11/12 z-40 px-2">
            <div className="flex flex-col items-start gap-1">
                <h1 className="text-xl md:text-4xl font-semibold">Domino's Pizza</h1>
                <h4 className="text-gray-900">Pizza, Fast Food, Desserts, Beverages</h4>
                <h4 className="text-gray-600">MG Road, Bangalore</h4>
                <p className="text-yellow-500">Open now <span>11am – 11pm (Today)</span></p>
            </div>
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 bg-green-500 px-1 rounded-md text-white">
                        <h3 className="text-sm md:text-lg">3.2</h3>
                        <GoStar />
                    </span>
                    <span className="flex flex-row gap-1 md:gap-0 md:flex-col items-center md:items-start border-b border-dashed border-gray-800">
                        <h3 className="text-xs md:text-lg font-semibold">24</h3>
                        <p className="hidden md:block text-md text-gray-800">Dinning Reviews</p>
                        <p className="text-xs md:hidden">Dinning</p>
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 bg-green-500 px-1 rounded-md text-white">
                        <h3 className="text-sm md:text-lg">3.2</h3>
                        <GoStar />
                    </span>
                    <span className="flex flex-row md:flex-col gap-1 items-start border-b border-dashed border-gray-800">
                        <h3 className="text-xs md:text-sm md:text-lg font-semibold">24</h3>
                        <p className="text-md hidden md:block md:text-sm text-gray-800">Delivery Reviews</p>
                        <p className="text-xs md:hidden">Delivery</p>
                    </span>
                </div>
            </div>
        </div>
    </>
  )
}

export default RestaurantInfo
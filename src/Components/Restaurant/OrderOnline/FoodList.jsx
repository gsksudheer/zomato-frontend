import React from 'react'
import FoodItem from './FoodItem'
const FoodList = () => {
  return (
    <>
        <div className="flex flex-col items-start gap-10">
            <h1 className="texl-lg md:text-xl font-bold mt-3">Recommended</h1>
            <div className="flex flex-col items-start gap-5">
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem /> 
            </div>

        </div>
    </>
  )
}

export default FoodList
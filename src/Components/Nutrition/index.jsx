import React from 'react'

//Components
import NutritionHeroCarousal from './NutritionHeroCarousal';
import NutritionCarousal from './NutritionCarousal';
import NutritionCard from "./NutritionCard";

const Nutrition = () => {
    return (
        <>
            <NutritionHeroCarousal /> 
            <div className="my-6">
                <NutritionCarousal />
            </div>
            <div className="flex flex-wrap items-center gap">
                <NutritionCard bg="red" image=" https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp" />
                <NutritionCard bg="blue" image=" https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp" />
                <NutritionCard bg="green" image=" https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp" />
                <NutritionCard bg="red" image=" https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp" />

            </div>
        </>
    )
}
export default Nutrition;

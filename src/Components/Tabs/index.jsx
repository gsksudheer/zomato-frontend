import React, { useState, } from "react"
import { BiShoppingBag, BiDrink } from "react-icons/bi";
import { IoFastFoodOutline, IoNutritionOutline } from "react-icons/io5";
import { useParams, Link } from "react-router-dom";

const MobileTabs = () => {    
    const [allTypes, setAllTypes] = useState([
        {
            id: "delivery",
            icon:  <BiShoppingBag className="w-full h-full"/>,
            name: "Delivery",
            isActive: false,
    
        },
        {
            id: "dinning",
            icon:  <IoFastFoodOutline className="w-full h-full"/>,
            name: "Dinning Out",
            isActive: false,
    
        },
        {
            id: "nightlife",
            icon:  <BiDrink className="w-full h-full"/>,
            name: "Nightlife",
            isActive: false,
    
        },
        {
            id: "nutrition",
            icon:  <IoNutritionOutline className="w-full h-full"/>,
            name: "Nutrition",
            isActive: false,
    
        },
    ]);
    const { type } = useParams();
    return (
        <>
            <div className="lg:hidden bottom-0 border fixed z-40 bg-white shadow-xl flex items-center justify-around w-full pb-1">

                {
                    allTypes.map((item) => (
                        <Link to={`/${item.id}`}>
                            <div className={ type===item.id ? "flex flex-col items-center gap-1 text-red-400 border-t-2 border-red-400 pt-1" : "flex flex-col items-center gap-1 pt-1"}>
                                <div className="w-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-md font-semibold">{item.name}</h3>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}
const PcTabs = () => {
    const [allTypes, setAllTypes] = useState([
        {
            id: "delivery",
            iconDefault: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
            iconActive:"https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
            name: "Delivery", 
            color: "yellow",
        },
        {
            id: "dinning",
            iconDefault: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
            iconActive: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
            name: "Dinning Out",
            color: "purple",
        },
        {
            id: "nightlife",
            iconDefault: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
            iconActive: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
            name: "Nightlife",
            color: "purple",
        },
        {
            id: "nutrition",
            iconDefault: "https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png",
            iconActive: "https://b.zmtcdn.com/data/o2_assets/0f6dcb1aef93fa03ea3f91f37918f3bc1616649503.png",
            name: "Nutrition",
            color: "yellow",
        },
    ]);
    const { type } = useParams();
    return (
        <>
            <div className="hidden lg:flex items-center gap-16 margin mx-auto px-52 border-b border-gray-200 shadow-sm">
                {
                    allTypes.map((items) => (
                        <Link to={`/${items.id}`}>
                            <div className={ items.id === type ? "flex items-center gap-4 border-b-4 border-red-400 pb-4 transition ease-in-out duration-600" : "flex items-center gap-4 pb-5" }>
                                <div className="w-16 h-16 p-3 bg-gray-300 rounded-full">
                                    <img src={ items.id === type ? items.iconActive : items.iconDefault } alt="" />
                                </div>
                                <h3 className={ items.id === type ? "text-gray-700 font-semibold text-lg" : "text-gray-500 font-semibold text-lg"}>
                                    {items.name}
                                </h3>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}
const Tabs = () => {
  return (
    <>
        <div>
            <MobileTabs />
            <PcTabs />
        </div>
    </>
  )
}

export default Tabs;
import React from 'react';
import { BsFilterLeft, BsArrowsCollapse, BsChevronCompactDown } from 'react-icons/bs';

const FiltersTab = (props) => {    
    return (
        <>
            <button                 
                className="flex items-center gap-2 border border-gray-200 p-2 rounded-lg shadow">
                <span>{props.icon}</span>
                <h3 className="text-md text-gray-500">{props.name}</h3>
            </button>
        </>
    )
}

const Filters = () => {
    const filter = [
        {
            name: "Filters",
            icon: <BsFilterLeft />
        },
        {
            name: "Delivery Time",
            icon: <BsArrowsCollapse />,
        },
        {
            name: "Pure Veg",
            icon: "",
        },
        {
            name: "Rating: 4.0+",
            icon: "",
        },
        {
            name: "Great Offers",
            icon: "",
        },
        {
            name: "Cuisines",
            icon: <BsChevronCompactDown />,
        },
    ]
  return (
      <>
        <div className="hidden lg:flex items-center gap-4 mt-5 mb-10">
            {
                filter.map((items) => (
                    <FiltersTab {...items}/>
                ))
            }
        </div>
      </>
    )
}

export default Filters
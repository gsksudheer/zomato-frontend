import React from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import classnames from 'classnames';
const Tab = (props) => {
    const { id } = useParams();
    return (
        <>
            <Link to={`/restaurant/${id}/${props.route}`}>
                <div className={classnames("pb-4 text-gray-500", 
                    {"text-red-500 border-b-4 border-red-500": props.isActive,}
                    )}>
                    <h3 className="text-sm md:text-lg lg:text-xl font-semibold">{props.title}</h3>
                </div>
            </Link>
        </>
    )
}
    
const TabsContainer = () => {
    const location = useLocation();
    const currentpath = location.pathname;

    const tabs = [
        {
            title: "Overview",
            route: "overview",
            isActive: currentpath.includes("overview"),
        },
        {
            title: "OrderOnline",
            route: "order-online",
            isActive: currentpath.includes("order-online"),
        },
        {
            title: "Reviews",
            route: "reviews",
            isActive: currentpath.includes("reviews"),
        },
        {
            title: "Menu",
            route: "menu",
            isActive: currentpath.includes("menu"),
        },
        {
            title: "Photos",
            route: "photos",
            isActive: currentpath.includes("photos"),
        },
    ]

  return (
    <>
        <div className='flex items-center gap-5 md:gap-16 border-b-2 md:mr-20'>
            {
                tabs.map((tab) => (
                    <Tab {...tab} key={`123${tab.route}`} />
                ))
            }
        </div>
    </>
  )
}

export default TabsContainer
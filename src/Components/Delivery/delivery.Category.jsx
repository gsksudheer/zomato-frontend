import React from 'react'

const DeliveryLgCard = (props) => {
    return (
        <>
            <div className="flex flex-col items-center gap-2">
                <div className="w-56 h-44">
                    <img src={`${props.image}`} alt="" className="w-full h-full object-cover rounded-md shadow"/>
                </div>
                <h2>{props.title}</h2>
            </div>
        </>
    )
}
const DeliverySmCard = (props) => {
    return (
        <>
            <div className="w-36 md:w-52 bg-white rounded-md flex flex-col items-center gap-1 md:gap-2">
                <div className="w-full h-24 md:h-28">                  
                    <img src={props.image} alt="" className="w-full h-full rounded-t-md"/>
                </div>
                <h2 className="text-gray-700 font-semibold text-md md:text-lg">{props.title}</h2>
            </div>
        </>
    )
}

const DeliveryCategory = (props) => {
  return (
      <>
        <div>
            <div className="sm:flex lg:hidden">
                <DeliverySmCard {...props} />
            </div>
            <div className="hidden lg:block">
                <DeliveryLgCard {...props} />
            </div>            
        </div>
      </>
  )
}

export default DeliveryCategory;
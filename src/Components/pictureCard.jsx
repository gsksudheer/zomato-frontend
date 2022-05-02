import React from 'react';
import { IoMdArrowDropright } from 'react-icons/io';

const PicutreCard = (props) => {
  return (
    <>      
      <div className="overflow-hidden relative">        
        <div className="w-64 h-80 relative">
          <img src={props.image} alt="" className="w-full h-full rounded-lg object-cover"/>
          <div className="w-full h-full absolute inset-0 rounded-lg"
            style={{background: "linear-gradient( 0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)"
          }}/> 
        </div>
        <div className="absolute bottom-2 left-4 text-gray-50">
          <h3 className="text-lg font-medium">{props.description}</h3>
          <span className="text-md flex items-center gap-2">{props.places} Places <IoMdArrowDropright /></span>
        </div>
      </div>
    </>
  )
}

export default PicutreCard;
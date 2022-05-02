import React from 'react';
import classnames from 'classnames';

const InfoButtons = (props) => {
  if(props.active) console.log(props);
  return (
      <>
        <button className={classnames("border border-gray-500 px-2 py-1 flex items-center gap-2 rounded-lg text-red-500", 
              {
                "bg-red-500 text-white": props.isActive,
              }
              )}>
            {props.children}            
        </button>
      </>
  )
}

export default InfoButtons;
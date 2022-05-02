import React from 'react'

const PhotoCollection = (props) => {
  return (
    <>
        <div className="w-32 h-46 md:w-48 md:h-48 rounded-sm overflow-hidden" onClick={props.openImageViewer} >
            <img src={props.image} alt="image" className="w-full h-full transform transition duration-700 hover:scale-110" />
        </div>
    </>
  )
}

export default PhotoCollection;
import React, { useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

const MenuCollection = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const openImageViewer = () => setIsMenuOpen(true);
  const closeImageViewer = () => setIsMenuOpen(false);

  return (
    <>
        {isMenuOpen && (
        <ImageViewer
          src={ props.image }
          currentIndex={ currentImg }
          disableScroll={ false }
          onClose={ closeImageViewer }
        />
      )}
        <div className="w-32 h-46 md:w-64 md:h-64 flex flex-col gap-2 pt-4" onClick={openImageViewer}>
            <div className="w-full h-full shadow-xl rounded-lg overflow-hidden">
                <img src={props.image[0]} 
                    alt=""
                    className="w-full h-full rounded-md transform transition duration-700 hover:scale-110"    
                />
            </div>
            <h3 className="text-lg text-gray-800 font-medium">{props.title}</h3>
            <p className="text-sm text-gray-400 font-light">{props.pages} pages</p>
        </div>
    </>
  )
}

export default MenuCollection;